const express=require('express')
const mongoose=require('mongoose')
const dbname='LocalStorage'
const MongoURI=`mongodb://127.0.0.1:27017/${dbname}`


const ConnectMongo=async()=>{
    
    try{
        await mongoose.connect(MongoURI)
        console.log('Connected Mongo Succussfully')
    }
    catch(err){
        console.log('Error Occurred '+err)
    }
    

}


module.exports=ConnectMongo