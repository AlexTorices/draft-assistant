const Sequelize = require("sequelize")

const Synergy = (sequelize)=> {
    sequelize.define('synergy',{
        idSynergy:{
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        }
    })
}

module.exports = Synergy