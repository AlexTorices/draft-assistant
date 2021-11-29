const Sequelize = require("sequelize")

const Champs = (sequelize)=> {
    sequelize.define('champs',{
        champName: {
            type: Sequelize.STRING(20),
            allowNull: false,
            primaryKey: true
        },
        image: {
            type: Sequelize.STRING(75),
            allowNull: false
        }
    })
}

module.exports = Champs