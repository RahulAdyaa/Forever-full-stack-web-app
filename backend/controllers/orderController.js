import ordermodel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

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
const placeOrderStripe = async (req, res) => {};


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
const updateStatus = async (req, res) => {};

export {
  placeOrder,
  placeOrderStripe,
  placeOrderRazoprpay,
  allOrders,
  userOrders,
  updateStatus,
};
