import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'


const Collection = () => {

    const {products , search , showSearch} = useContext(ShopContext)
    const [showFilter , setShowFilter] = useState(false)
    const [filterProducts, setFilterProducts] = useState([])
    const [category,setCategory]= useState([])
    const [subCategory,setSubCategory]= useState([])
    const [sortType,setSortType]= useState('relevant')

    const toggleCategory=(e)=>{
      if (category.includes(e.target.value)) {
      // agar category already included hai, toh , user wants to deselect it , toh filter lagake , remove krdo
        setCategory(prev=>prev.filter(item=>item!==e.target.value))
      }
      else{
        // agar category included nahi hai, toh , user wants to select it , toh add krdo . spread the array , and add the target value
        setCategory(prev=>[...prev,e.target.value])
      }
    }

    const toggleSubCategory=(e)=>{
      if(subCategory.includes(e.target.value)){
        setSubCategory(prev=>prev.filter(item=>item!==e.target.value))
      }
      else{
        setSubCategory(prev=>[...prev , e.target.value])
      }
    }
    // only runs 1 , when page is first loaded , but this functionality is added in applyfilter already
    // useEffect(()=>{
    //   setFilterProducts(products)
    // },[])

    const applyFilter=()=>{
      let productsCopy=products.slice();

      if(showSearch && search){
        productsCopy=productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
      }

      if(category.length>0){
        //✔ "Jo bhi item ka category field, selected category list mein hai, bas unko hi productsCopy mein rakho."
        productsCopy=productsCopy.filter(item=>category.includes(item.category))
      }
      if(subCategory.length>0){
        productsCopy=productsCopy.filter(item=>subCategory.includes(item.subCategory))
      }

      setFilterProducts(productsCopy)

    }
    const sortProduct=()=>{
      //will make copy of filter products
      let filterProdCopy=filterProducts.slice();
      switch(sortType){
        case 'low-high':
          setFilterProducts(filterProdCopy.sort((a,b)=>(a.price-b.price)));
          break;
        case 'high-low':
          setFilterProducts(filterProdCopy.sort((a,b)=>(b.price-a.price)));
          break;
        default:
          applyFilter();
          break;
      }
    }

    useEffect(()=>{
      applyFilter()
    },[category,subCategory,search,showSearch,products])

    useEffect(()=>{
      sortProduct();
    },[sortType])
    
    //"Jab user koi naya sort type choose karta hai, setSortType state ko update karta hai. useState sabhi sort types ko yaad rakhta hai, aur jab bhi sort type badalta hai, useEffect us change ko detect karke sortProduct function ko call karta hai, jo naya sorted data banata hai aur setFilterProducts ke through screen par dikhata hai."

    
    return (
        <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
          {/*Filter Options  */}
          <div className="min-w-60">
            <p onClick={()=>(setShowFilter(!showFilter))} className='my-2 text-xl flex  items-center cursor-pointer gap-2'>FILTERS
              <img className={`h-3 sm-hidden${showFilter?'rotate-90':''}`} src={assets.dropdown_icon} alt="" />
            </p>
            {/* Category Filter */}
            <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter?'':'hidden'} sm:block`}>
              <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
              <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                <p className='flex gap-2'>
                  <input type="checkbox" className='w-3' value={'Men'}onChange={toggleCategory} />Men
                </p>
                <p className='flex gap-2'>
                  <input type="checkbox" className='w-3' value={'Women'} onChange={toggleCategory}/>Women
                  
                </p>
                <p className='flex gap-2'>
                  <input type="checkbox" className='w-3' value={'Kids'}onChange={toggleCategory}/> Kids
                </p>
              </div>
            </div>
          {/* SubCategory Filter */}
          <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter?'':'hidden'} sm:block`}>
              <p className='mb-3 text-sm font-medium'>TYPE</p>
              <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                <p className='flex gap-2'>
                  <input type="checkbox" className='w-3' value={'Topwear'} onChange={toggleSubCategory}/>Topwear
                </p>
                <p className='flex gap-2'>
                  <input type="checkbox" className='w-3' value={'Bottomwear'} onChange={toggleSubCategory}/>Bottomwear
                  
                </p>
                <p className='flex gap-2'>
                  <input type="checkbox" className='w-3' value={'Winterwear'}  onChange={toggleSubCategory}/> Winterwear
                </p>
              </div>
            </div>
          </div>
          
          {/*Right Side */}
          <div className="flex-1">
            <div className="flex justify-between tet-base sm:text-2xl mb-4">
              <Title text1={'ALL'} text2={'COLLECTIONS'}/>
              {/*Product Sort */}
              <select onChange={(e)=>setSortType(e.target.value)} className='border border-gray-300 text-sm px-2'>
                <option value="relevant">Sort by: Relevant</option>
                <option value="low-high">Sort by: Low to High</option>
                <option value="high-low">Sort by: High to Low</option>
              </select>
            </div>
          
          {/*Map Products */}
          <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 ">
          {
            filterProducts.map((item,index)=>(
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
            ))
          }
          </div>
          </div>
          
        </div>
    )
}

export default Collection
