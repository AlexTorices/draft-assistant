const Sequelize = require("sequelize")

const Synergy = (sequelize)=> {
    sequelize.define('synergy',{
        champ1: {
            type: Sequelize.STRING(20),
            allowNull: false,
            foreignKey: true
        },
        champ2: {
            type: Sequelize.STRING(20),
            allowNull: false,
            foreignKey: true
        }
    })
}

module.exports = Synergy