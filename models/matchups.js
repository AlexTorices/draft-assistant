const Sequelize = require("sequelize")

const Matchups = (sequelize)=> {
    sequelize.define('matchups',{
        idMatchup:{
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        }
    })
}

module.exports = Matchups