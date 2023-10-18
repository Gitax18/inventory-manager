//  modules and libraries
const express = require('express');
const bodyParser = require('body-parser');
const Seq = require('sequelize');
require('dotenv').config();


// custom modules
const routes = require('./routes');
const seqEnv = require('./database');


const app = express();

const port = process.env.port;

// configuring app settings
app.use(bodyParser.urlencoded({extended: false})); // setting bodyparser to encode incoming data 
app.set('view engine', 'ejs'); // setting view engine to ejs
app.set('views', 'views'); // setting default views directory 

// calling routes
app.use(routes);


// syncing sequelize connection to database
seqEnv.sync().then((res)=>{
    // listening to server if connection to database is succesfull
    app.listen(port, ()=>{
        console.log(`server is listening at port: http://localhost:${port}`);
    })
}).catch(err =>{
    console.log(err);
})

