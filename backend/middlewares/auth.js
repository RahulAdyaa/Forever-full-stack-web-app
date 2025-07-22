// Authenticate user whenever user will add the product in cart , or update. the cart data , or place the order , then we will use this middleware . this middleware will convert the token into user's id


import jwt  from 'jsonwebtoken';

const authUser = async(req , res , next)=>{
    const {token} = req.headers;
    if(!token){
        return res.json({success:false , message:'Not authorized , Login Again' })
    }
    try {
         // when we created the token , then we have added an object , in that object we have user's id
        const token_decode = jwt.verify(token, process.env.JWT_SECRET)
        req.body.userId= token_decode.id
        next()
        
    } catch (error) {
       console.log(error)
       res.json({success:false , message:error.message})
    }
}

export default authUser

