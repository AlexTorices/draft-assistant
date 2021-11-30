const Sequelize = require("sequelize")

const Matchups = (sequelize)=> {
    sequelize.define('matchups', {
        id_winner: {
            type: Sequelize.STRING(20),
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'champs',
                key: 'champName'
            }
        },
        id_loser: {
            type: Sequelize.STRING(20),
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'champs',
                key: 'champName'
            }
        }
    })
}

module.exports = Matchups