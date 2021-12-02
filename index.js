const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const dbConfig = require('./configuration/dbConfig');
const account = require('./routes/account');
const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('cors');
const { options } = require('./routes/account');

const server = express();
const port = 3677;

server.use(cors());
server.use(express.static(path.join(__dirname, 'public')));

server.use(passport.initialize());
require('./configuration/passportConfig')(passport);

mongoose.connect(dbConfig.dbConnection);
mongoose.connection.on('connected', ()=>{
    console.log('Database connected...');
});
mongoose.connection.on('error', (error)=>{
    console.log('Connection error. Error:' + error);
});

server.use(express.json());
server.use(express.urlencoded({
    extended:true
}))

server.get('/', function(request, response){
    //response.send('Home page');
    response.sendFile('index.html');
});

server.use('/account', account);
// server.use(bodyParser.json());
// server.use(bodyParser.urlencoded({
//     extended:true
// }));


server.listen(port, ()=>{
    console.log('Server started...');
});