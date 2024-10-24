
const path = require('path');
const orderModel = require('../models/order/orderModel')
const tableModel = require('../models/table/tableModel');
const { populate } = require('dotenv');

const getorders = async(req,res) => {
    try{
        const order = await orderModel.find({}).populate({path : 'staffId', populate :{path:'staffRole'}}).populate('tableId');
        res.status(200).json(order)
    }catch(error){
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}

const postorder = async(req,res) => {
    try {
        console.log("post contoller");
        
        const {orderDateTime,staffId,tableId} = req.body

        if(!orderDateTime || !staffId || !tableId){
            return res.json({'msg' : 'all fields are required'})
        }

        const data = await orderModel({
            orderDateTime,
            staffId,
            tableId
        });

        await data.save()
        res.status(200).json(data)
    }catch (error) {
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}

module.exports = { getorders , postorder ,}