// forein key usages bakiii

const orderModel = require('../models/order/orderModel')
const tableModel = require('../models/table/tableModel')

const getorders = async(req,res) => {
    try{
        const order = await orderModel.find({});

        res.status(200).json(order)
    }catch(error){
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}

const postorder = async(req,res) => {
    try {
        const {orderDateTime} = req.body

        if(!orderDateTime){
            return res.json({'msg' : 'orderDateTime is required'})
        }

        const data = await orderModel({
            orderDateTime
        });

        await data.save()
        res.status(200).json(data)
    }catch (error) {
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}

module.exports = { getorders , postorder ,}