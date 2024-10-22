// compltitedd

const ingredientTypeModel = require('../models/ingredient_type/ingredientTypeModel')

const getIngredientTypes = async(req,res) => {
    try{
        const ingredientType = await ingredientTypeModel.find({});

        res.status(200).json(ingredientType)
    }catch(error){
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}
const getIngredientType = async(req,res) => {
    try{
        const ingredientType = await ingredientTypeModel.findOne({_id : req.params.id});

        if(!ingredientType){
            return res.status(404).json({'error' : 'data not found'})
        }

        res.status(200).json(ingredientType)
    }catch(error){
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}

const postIngredientType = async(req,res) => {
    try {
        const {ingredientTypeCode, ingredientTypeDescription} = req.body

        if(!ingredientTypeCode || !ingredientTypeDescription){
            return res.json({'msg' : 'all fields are required'})
        }

        const data = await ingredientTypeModel({
            ingredientTypeCode,
            ingredientTypeDescription
        });

        await data.save()
        res.status(200).json(data)
    }catch (error) {
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}

const putIngredientType = async(req,res) => {
    try{

        const {ingredientTypeCode, ingredientTypeDescription} = req.body

        const data = await ingredientTypeModel.findOneAndUpdate({_id : req.params.id},{
            ingredientTypeCode,
            ingredientTypeDescription
        });

        if(!data){
            return res.status(404).json({'error' : 'data not found'})
        }

        console.log("data",data);
        
        res.status(200).json({
            'msg' : 'Ingredient Type updated',
            data
        })
    }catch(error){
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}

const deleteIngredientType = async(req,res) => {
    try{
        const IngredientType = await ingredientTypeModel.findOneAndDelete({_id : req.params.id});
        res.status(200).json({ 'msg' : 'Ingredient Type deleted',IngredientType})
    }catch(error){
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}

module.exports = {getIngredientType , getIngredientTypes , postIngredientType , putIngredientType ,  deleteIngredientType}