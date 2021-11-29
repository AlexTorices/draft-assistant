const Sequelize = require("sequelize")

const Champ = (sequelize)=> {
    sequelize.define('champ',{
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

module.exports = Champ