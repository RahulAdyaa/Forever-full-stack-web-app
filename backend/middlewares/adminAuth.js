// middleware for those apis which need admin permission

import jwt from "jsonwebtoken"

const adminAuth = async(req,res,next)=>{
    try {
        const {token} = req.headers
        if(!token){
            return res.json({success:false , message:"Not Authorized , Login again"})
        }
        //if token is available , we will decode the token
        const token_decode=jwt.verify(token , process.env.JWT_SECRET)
        if(token_decode!=process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
            return res.json({success:false , message:"Not Authorized , Login again"})
        }
        //if token is matching with email and password then we will call our callback function
        next()
    } catch (error) {
        
    }
}
export default adminAuth