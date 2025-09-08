
import {v2 as cloudinary} from "cloudinary"
import productModel from "../models/productModel.js"
import { json } from "express"
// function for add product



const addProduct = async(req,res)=>{
    try {
        const{name , description , price , category , subCategory , sizes , bestSeller} = req.body
        
        const image1= req.files.image1 && req.files.image1[0] // image1 is array,we want first image ,  if image 1 is available we get it
        const image2= req.files.image2 && req.files.image2[0] // image1 is array,we want first image ,  if image 2 is available we get it
        const image3= req.files.image3 && req.files.image3[0] // image1 is array,we want first image ,  if image 3 is available we get it
        const image4= req.files.image4 && req.files.image4[0] // image1 is array,we want first image ,  if image 4 is available we get it

        const images =[image1, image2, image3 , image4].filter((item)=>item!==undefined)  

        let imagesUrl = await Promise.all(
            images.map(async(item)=>{
                let result = await cloudinary.uploader.upload(item.path,{resource_type:'image'});
                return result.secure_url
            })
        )

        const productData={
            name,
            description,
            category,
            price:Number(price),  // as we get price as number
            bestSeller: bestSeller ==='true' ?true:false, // as we get bestseller as true or false
            sizes:JSON.parse(sizes),
            subCategory,
            image:imagesUrl,
            date:Date.now()

        }
        console.log(productData);
        const product = new productModel(productData)
        await product.save()

        res.json({success:true , message:"Product added"})
        
        
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}
// function for list products

const listProducts = async(req,res)=>{
    try {
        const products= await productModel.find({});
        res.json({success:true , products})
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}
// function for remove product

const removeProducts = async(req,res)=>{
    try {
        await productModel.findByIdAndDelete(req.body.id)
        res.json({success:true , message:"Product Removed"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}
// function for single product info

const singleProduct = async(req,res)=>{
    try {
        const {productId}=req.body
        const product=await productModel.findById(productId)   
        res.json({success:true , product})     
    } catch (error) {
         console.log(error)
        res.json({success:false,message:error.message})
    }
}

export {listProducts,addProduct,removeProducts,singleProduct}