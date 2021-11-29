const Sequelize = require('sequelize')
// Generar conexion param1 = nombreBD, param2=usuario, param3=password
const sequelize = new Sequelize('DRAFT_ASSISTANT','user3','root',{
    dialect: 'mysql',
    host: '54.234.54.143', //Direccion IP
    define:{
        // No coloques createdAt y updateAt
        timestamps: false,
        // Evitar plural
        freezeTableName: true
    }
})
    

sequelize.sync()
    .then(resultado=>{
        console.log('Conexion exitosa')
        // CRUD CREATE READ UPDATE DELETE
        // Create INSERT INTO
        /*Champ.create({
            champName: 'aatrox',
            image: 'https://opgg-static.akamaized.net/images/lol/champion/Aatrox.png'
        })
        .then(resultado=>console.log("Registro exitoso"))
        .catch(error=>console.log(error),
        Champ.findAll()
            .then(result=>console.log(result))
            .catch(error=>console.log(error))
        )*/

        // READ SELECT * from <tabla>
        Champ.findAll()
        .then(result=>console.log(result))
        .catch(error=>console.log(error))

        // DELETE
        /*Usuario.destroy({
            where:{
                nombreUsuario:'GREG'
            }
        })
            .then(res=>console.log("Registro eliminado"))
            .catch(err=>console.log(err))

        sequelize.query('SELECT * FROM usuario', {
            type:Sequelize.QueryTypes.SELECT
        })
            .then(usuarios=>console.log(usuarios))
            .catch(err=>console.log(err))
        */
       /*Champ.update({image:"https://opgg-static.akamaized.net/images/lol/champion/Aatrox.png"},{
            where:{
                champName:"aatrox"
            }
        })
            .then(()=>console.log("Usuario actualizado"))
            .catch(err=>console.log(err))*/
    })
    .catch(error=>console.log(error))