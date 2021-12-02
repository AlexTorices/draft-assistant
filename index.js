const express = require("express")
const path = require("path")
const champRoutes = require('./routes/champs')
const matchupRoutes = require('./routes/matchups')
const synergyRoutes = require('./routes/synergy')
const sequelize = require('./utils/database')
const cors = require('cors')
const app = express();

app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs')

app.use("/", champRoutes);
app.use("/", matchupRoutes);
app.use("/", synergyRoutes);


sequelize.sync()
    .then(()=>{
        app.listen(8085,()=>{
        console.log("Aplicación web en línea en el puerto 8085")
        })
    })
    .catch(err=>console.log(err))
