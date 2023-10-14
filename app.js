const path = require('path')
const express = require("express");
const cors = require("cors");
const { db } = require("./db/db");
const{readdirSync} = require('fs');
const app = express()

require('dotenv').config()

const PORT = process.env.PORT

//middleware

app.use(express.json())
app.use(cors())



//routes
readdirSync('./routes').map((route)=> app.use('/api/v1', require(('./routes/' + route)) ))

app.use(express.static(path.join(__dirname + "/public")))
app.use(express.static('/var/www/html'));

const server = ()=> {
    db()
    app.listen(PORT, ()=> {
        console.log('Listening to port:', PORT)
    })

}

server()


