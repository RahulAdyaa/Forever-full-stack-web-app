import express from "express"

import { addToCart,updateCart,getUserCart } from "../controllers/cartController.js"
import authUser from "../middlewares/auth.js"


const cartRouter =  express.Router()

cartRouter.post('/get',authUser , getUserCart) // send cart data through API
cartRouter.post('/add',authUser , addToCart) // add products to cart through API
cartRouter.post('/update' ,authUser, updateCart) // update cart through API

export default cartRouter

// when user hit the endpoint , the token will be verified , and using that token , in the body , we will get the user id . and then the function will run