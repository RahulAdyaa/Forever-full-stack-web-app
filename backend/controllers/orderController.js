import ordermodel from "../models/ordermodel.js";
import userModel from "../models/usermodel.js";
import Stripe from 'stripe'


//global variables

const currency = 'usd'
const deliverycharge=10
//payment gateway initialise

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// Placing order using COD
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new ordermodel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId,{cartData:{}}) // cleared the cart
    res.json({success:true , messsge:"Order Placed Successfully"})
  } catch (error) {
    console.log(error)
    res.json({success:false , messsge:error.message})
  }
};
// Placing order using STRIPE
const placeOrderStripe = async (req, res) => {
  try {

    const {userId , amount , address ,items }= req.body
    const {origin}=req.headers;

    const orderData = {
      userId,items,address,amount,paymentMethod:"Stripe" ,payment:false , date:Date.now()
    }

    const newOrder = new ordermodel(orderData);
    await newOrder.save();

    const line_items=items.map((item)=>(
      {price_data : {
        currency:currency,
        product_data:{
          name:item.name
        },
        unit_amount:item.price * 100
      },
      quantity : item.quantity

    }

    ))
    line_items.push({
      price_data : {
        currency:currency,
        product_data:{
          name:'Delivery charges'
        },
        unit_amount:deliverycharge * 100
      },
      quantity : 1

    })

    const session = await stripe.checkout.sessions.create({
      success_url:`${origin}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url:`${origin}/verify?success=false&orderId=${newOrder._id}`,
      line_items,
      mode:'payment'
    })
    
    res.json({success:true , session_url:session.url})
  } catch (error) {
    console.log(error)
    res.json({success:false , messsge:error.message})
  }


};

// Verify Stripe
const verifyStripe = async (req, res) => {
  const { orderId, success, userId } = req.body;

  try {
    if (success === "true") {
      await ordermodel.findByIdAndUpdate(orderId, { payment: true });
      await userModel.findByIdAndUpdate(userId, { cartData: {} });
      res.json({ success: true });
    } else {
      await ordermodel.findByIdAndDelete(orderId);
      res.json({ success: false });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};


// Placing order using RAZORPAY
const placeOrderRazoprpay = async (req, res) => {};

//ALL ORDERS DATA FOR ADMIN PANEL
const allOrders = async (req, res) => {
  try {
    const orders = await ordermodel.find({});
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};


//USER ORDER DATA FOR FRONTEND
const userOrders = async (req, res) => {
  try {
    const { userId } = req.body;

    const orders = await ordermodel.find({ userId });
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};



//UPDATE ORDER STATUS FROM ADMIN PANEL ONLY
const updateStatus = async (req, res) => {
  try {

    const {orderId , status} = req.body

    await ordermodel.findByIdAndUpdate(orderId,{status})
    res.json({success:true,message:'Status Updated'})
    
  } catch (error) {
    console.log(error)
    res.json({success:false , message:error.message})
  }
};

export {
  placeOrder,
  placeOrderStripe,
  placeOrderRazoprpay,
  allOrders,
  userOrders,
  updateStatus,
  verifyStripe
};
