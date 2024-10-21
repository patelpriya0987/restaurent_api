// complited
const customerModel = require('../models/customer/customerModel')

const getcustomers = async(req,res) => {
    try{
        const customer = await customerModel.find({});

        res.status(200).json(customer)
    }catch(error){
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}
const getcustomer = async(req,res) => {
    try{

        const customer = await customerModel.findOne({_id : req.params.id});

        if(!customer){
            return res.status(404).json({'error' : 'customer not found'})
        }

        res.status(200).json(customer)
    }catch(error){
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}

const postcustomer = async(req,res) => {
    try {
        const {fname,surname,phoneNumber,cellPhoneNumber,email} = req.body

        if(!fname || !surname || !phoneNumber || !cellPhoneNumber || !email ){
            return res.json({'msg' : 'all feilds is required'})
        }

        const data = await customerModel({
            fname,
            surname,
            phoneNumber,
            cellPhoneNumber,
            email
        });

        await data.save()
        res.status(200).json(data)
    }catch (error) {
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}

const putcustomer = async(req,res) => {
    try{

        const {fname,surname,phoneNumber,cellPhoneNumber,email} = req.body

        const data = await customerModel.findOneAndUpdate({_id : req.params.id},{
            fname,
            surname,
            phoneNumber,
            cellPhoneNumber,
            email
        });

        if(!data){
            return res.status(404).json({'error' : 'data not found'})
        }

        console.log("data",data);
        
        res.status(200).json({
            'msg' : 'customer Date updated',
            data
        })
    }catch(error){
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}


module.exports = {getcustomer , getcustomers , postcustomer , putcustomer}