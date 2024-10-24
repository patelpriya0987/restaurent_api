
const ingredientModel = require('../models/ingredient/ingredientModel')
const ingredientTypeModel = require('../models/ingredient_type/ingredientTypeModel')

const getingredients = async(req,res) => {
    try{
        const ingredient = await ingredientModel.find({}).populate('ingredientType');
        res.status(200).json(ingredient)
    }catch(error){
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}
const getingredient = async(req,res) => {
    try{
        const ingredient = await ingredientModel.findOne({_id : req.params.id});

        if(!ingredient){
            return res.status(404).json({'error' : 'data not found'})
        }

        res.status(200).json(ingredient)
    }catch(error){
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}

const postingredient = async(req,res) => {
    try {
        const ingredient = await ingredientModel.findOne({_id : req.params.id}).populate('ingredientType');
        const {ingredientName,ingredientType} = req.body

        if(!ingredientName){
            return res.json({'msg' : 'ingredient Name is required'})
        }

        const data = await ingredientModel({
            ingredientName,
            ingredientType
        });

        await data.save()
        res.status(200).json(data)
    }catch (error) {
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}

const putingredient = async(req,res) => {
    try{

        const {ingredientName} = req.body

        const data = await ingredientModel.findOneAndUpdate({_id : req.params.id},{
            ingredientName,
        });

        if(!data){
            return res.status(404).json({'error' : 'data not found'})
        }

        console.log("data",data);
        
        res.status(200).json({
            'msg' : 'Ingredient updated',
            data
        })
    }catch(error){
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}

const deleteingredient = async(req,res) => {
    try{
        const Ingredient = await ingredientModel.findOneAndDelete({_id : req.params.id});
        res.status(200).json({ 'msg' : 'Ingredient Type deleted',Ingredient})
    }catch(error){
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}


module.exports = {getingredient , getingredients , postingredient , putingredient ,  deleteingredient}