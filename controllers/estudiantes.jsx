const {request,response} =require("express");
const getAllStudents = async (request,response)=>{
    response.status(200).json({
        'status':200,
        message:'hello from server'
    })
}

module.exports={getAllStudents}