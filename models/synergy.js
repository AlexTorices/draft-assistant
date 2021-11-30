const Sequelize = require("sequelize")

const Synergy = (sequelize)=> {
    sequelize.define('synergy', {
        id_1: {
            type: Sequelize.STRING(20),
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'champs',
                key: 'champName'
            }
        },
        id_2: {
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

module.exports = Synergy