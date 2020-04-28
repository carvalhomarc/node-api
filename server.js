const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');


const app = express();
app.use(express.json());
app.use(cors);
//iniciando o DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {
     useUnifiedTopology: true, 
     useNewUrlParser: true  
});
requireDir('./src/models');

const Product = mongoose.model('Product');
//Rotas
app.use('/api', require('./src/routes'));

//rodará na porta 
app.listen(3001);
