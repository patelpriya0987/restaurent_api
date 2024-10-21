const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://priyupatel0987:eIDTaVacSbzWccCC@api.bew3f.mongodb.net/restaurentAPI')
  .then(() => console.log('DB Connected!')).catch((err) =>{
    console.log("err",err);
  })