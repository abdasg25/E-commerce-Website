import mongoose  from "mongoose";

const OrderSchema = new mongoose.Schema({
    productid:{
        type:Number
    },
    
})

export const Order = mongoose.model("Order",OrderSchema)