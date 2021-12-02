const express = require("express")
const path = require("path")
const champRoutes = require('./routes/champs')
const matchupRoutes = require('./routes/matchups')
const synergyRoutes = require('./routes/synergy')
const sequelize = require('./utils/database')
const app = express();


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())
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
