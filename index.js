const express = require("express")
const path = require("path")
const champRoutes = require('./routes/champs')
const sequelize = require('./utils/database')
const app = express();

app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs')

app.use("/", champRoutes);

sequelize.sync()
    .then(()=>{
        app.listen(8085,()=>{
        console.log("Aplicación web en línea en el puerto 8082")
        })
    })
    .catch(err=>console.log(err))
