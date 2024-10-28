
const orderMenuItemModel = require('../models/order_menu_item/orderMenuItemModel.js')
const orderModel = require('../models/order/orderModel.js');
const menu = require('../models/menu/menuModel.js');
const { populate } = require('dotenv');
const getorderMenuItems = async(req,res) => {
    try{
        const orderMenuItem = await orderMenuItemModel.find({}).populate({path:'orderId' , populate : [{path:'tableId'},{path:'staffId' , populate : {path:'staffRole'}}]}).populate({path:'menuItemId' , populate : {path:'menuId'}});
        res.status(200).json(orderMenuItem)
    }catch(error){
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}
const getorderMenuItem = async(req,res) => {
    try{
        const orderMenuItem = await orderMenuItemModel.findOne({_id : req.params.id});

        if(!orderMenuItem){
            return res.status(404).json({'error' : 'data not found'})
        }
        res.status(200).json(orderMenuItem)
    }catch(error){
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}

const postorderMenuItem = async(req,res) => {
    try {
        const {orderMenuItemQuantity,orderMenuItemComments,orderId,menuItemId} = req.body

        if(!orderMenuItemComments || !orderMenuItemQuantity || !orderId || !menuItemId){
            return res.json({'msg' : 'all fields are required'})
        }

        const data = await orderMenuItemModel({
            orderMenuItemComments,
            orderMenuItemQuantity,
            orderId,
            menuItemId
        });

        await data.save()
        res.status(200).json(data)
    }catch (error) {
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}

const putorderMenuItem = async(req,res) => {
    try{

        const {orderMenuItemQuantity,orderMenuItemComments,orderId,menuItemId} = req.body

        const data = await orderMenuItemModel.findOneAndUpdate({_id : req.params.id},{
            orderMenuItemComments,
            orderMenuItemQuantity,
            orderId,
            menuItemId
        });

        if(!data){
            return res.status(404).json({'error' : 'data not found'})
        }

        console.log("data",data);
        
        res.status(200).json({
            'msg' : 'orderMenuItem updated',
            data
        })
    }catch(error){
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}

const deleteorderMenuItem = async(req,res) => {
    try{
        const orderMenuItem = await orderMenuItemModel.findOneAndDelete({_id : req.params.id});
        res.status(200).json({ 'msg' : 'orderMenuItem Type deleted',orderMenuItem})
    }catch(error){
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}


module.exports = {getorderMenuItem , getorderMenuItems , postorderMenuItem , putorderMenuItem ,  deleteorderMenuItem}