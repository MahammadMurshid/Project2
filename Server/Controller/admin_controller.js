const express = require('express')
const AdminSchema = require('../Model/Admin')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const JWT_SECRET = 'hello';  //to create token web server

const Register = async (req, res) => {
    /* res.send('This is Register Function') */
    try {
        const { name, phone, email, password } = req.body;
        let admin = await AdminSchema.findOne({ email: email })
        if (admin) {
            return res.json({ success: false, error: 'Email Already Exists' })
        }
        const salt = await bcrypt.genSalt(10)
        const secPass = await bcrypt.hash(password, salt)
        admin = new AdminSchema({ name: name, phone: phone, email: email, password: secPass })
        let savedAdmin = await admin.save()
        res.json({ success: true, savedAdmin })

        //res.send('This is Admin inserted Api')
    }
    catch (err) {
        res.json({ succuss: false, message: 'Internal Server Error' })
        console.log(err)
    }

}

const Login = async (req, res) => {
    try {
        const { email, password } = req.body
        let admin = await AdminSchema.findOne({ email })
        if (!admin) {
            return res.status(400).json({ error: 'incorrect email or password' })

        }
        const passwordCompare = await bcrypt.compare(password, admin.password)

        if (!passwordCompare) {
            const success = false;
            return res.status(400).json({ succuss, error: 'incorrect' })
        }
        const data = {
            admin: {
                id: admin.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET)
        const success = true
        res.json({ success, authtoken })
    }
    catch (err) {
        console.log(err)
    }

}
module.exports = { Register, Login }