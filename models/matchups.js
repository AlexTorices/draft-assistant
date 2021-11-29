const Sequelize = require("sequelize")

const Matchups = (sequelize)=> {
    sequelize.define('matchups',{
        winner: {
            type: Sequelize.STRING(20),
            allowNull: false,
            foreignKey: true
        },
        loser: {
            type: Sequelize.STRING(20),
            allowNull: false,
            foreignKey: true
        }
    })
}

module.exports = Matchups