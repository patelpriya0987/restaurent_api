// complited

const staffRoleModel = require('../models/staff_role/staffRoleModel')

const getstaffRoles = async(req,res) => {
    try{
        const staffRole = await staffRoleModel.find({});

        res.status(200).json(staffRole)
    }catch(error){
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}
const getstaffRole = async(req,res) => {
    try{
        const staffRole = await staffRoleModel.findOne({_id : req.params.id});

        if(!staffRole){
            return res.status(404).json({'error' : 'data not found'})
        }

        res.status(200).json(staffRole)
    }catch(error){
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}

const poststaffRole = async(req,res) => {
    try {
        const {staffRolecode, staffRoleDescription} = req.body

        if(!staffRolecode || !staffRoleDescription){
            return res.json({'msg' : 'all fields are required'})
        }

        const data = await staffRoleModel({
            staffRolecode,
            staffRoleDescription
        });

        await data.save()
        res.status(200).json(data)
    }catch (error) {
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}

const putstaffRole = async(req,res) => {
    try{

        const {staffRolecode, staffRoleDescription} = req.body

        const data = await staffRoleModel.findOneAndUpdate({_id : req.params.id},{
            staffRolecode,
            staffRoleDescription
        });

        if(!data){
            return res.status(404).json({'error' : 'data not found'})
        }

        console.log("data",data);
        
        res.status(200).json({
            'msg' : 'staff role updated',
            data
        })
    }catch(error){
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}

const deletestaffRole = async(req,res) => {
    try{
        const staffRole = await staffRoleModel.findOneAndDelete({_id : req.params.id});
        res.status(200).json({ 'msg' : 'staff Role deleted',staffRole})
    }catch(error){
        console.log(error)
        res.status(400).json({'error' : 'something went wrong'})
    }
}

module.exports = {getstaffRole , getstaffRoles , poststaffRole , putstaffRole ,  deletestaffRole}