const express=require('express')
const route=express.Router()
const {Register,Login}=require('../Controller/admin_controller')

route.post('/register',Register)
route.post('/login',Login)

module.exports=route