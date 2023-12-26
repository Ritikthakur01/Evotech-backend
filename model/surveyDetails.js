import mongoose from "mongoose";

const surveySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    gender: { 
        type: String,
        required: false 
    },
    nationality : {
        type: String,
        required: true
    },
    email:{
        type:String,
        require: true
    },
    phoneNumber:{
        type: String,
        require: true
    },
    address:{
        type: String,
        require: true
    },
    message:{
        type: String,
        require: true
    }
})

export default mongoose.model("surveyDetail", surveySchema);