
const tableModel = require('../models/table/tableModel')

const gettables = async(req,res) => {
    try{
        const table = await tableModel.find({});

        res.status(200).json(table)
    }catch(error){
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}

const posttable = async(req,res) => {
    try {
        const {tableNumber,tableDetails} = req.body

        if(!tableNumber || !tableDetails){
            return res.json({'msg' : 'all feilds are required'})
        }

        const data = await tableModel({
            tableNumber,
            tableDetails
        });

        await data.save()
        res.status(200).json(data)
    }catch (error) {
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}
module.exports = {gettables , posttable}