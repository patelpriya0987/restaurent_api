//forein keyy usages balii

const menuModel = require('../models/menu/menuModel')
const orderModel = require('../models/order/orderModel')
const menuItemModel = require('../models/menu_item/menuItemModel')


const getmenuItems = async(req,res) => {
    try{
        const menuItem = await menuItemModel.find({});

        res.status(200).json(menuItem)
    }catch(error){
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}
const getmenuItem = async(req,res) => {
    try{
        const menuItem = await menuItemModel.findOne({_id : req.params.id});

        if(!menuItem){
            return res.status(404).json({'error' : 'menu Item not found'})
        }

        res.status(200).json(menuItem)
    }catch(error){
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}

const postmenuItem = async(req,res) => {
    try {
        const {menuItemDescription,menuItemPrice} = req.body

        if(!menuItemDescription || !menuItemPrice){
            return res.json({'msg' : 'all feilds are required'})
        }

        const data = await menuItemModel({
            menuItemDescription,
            menuItemPrice
        });

        await data.save()
        res.status(200).json(data)
    }catch (error) {
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}

const putmenuItem = async(req,res) => {
    try{

        const {menuItemDescription,menuItemPrice} = req.body

        const data = await menuItemModel.findOneAndUpdate({_id : req.params.id},{
            menuItemPrice,
            menuItemDescription
        });

        if(!data){
            return res.status(404).json({'error' : 'data not found'})
        }

        console.log("data",data);
        
        res.status(200).json({
            'msg' : 'menu items Date updated',
            data
        })
    }catch(error){
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}

const deletemenuItem = async(req,res) => {
    try{
        const menuItems = await menuItemModel.findOneAndDelete({_id : req.params.id});
        res.status(200).json({ 'msg' : 'menu items deleted',menuItems})
    }catch(error){
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}


module.exports = {getmenuItem , getmenuItems , postmenuItem , putmenuItem ,  deletemenuItem}