const {applyRelations} = require('./relations')
const Sequelize = require('sequelize')

const sequelize = new Sequelize('DRAFT_ASSISTANT','user3','root',{
    dialect: 'mysql',
    host: '54.234.54.143',
    define:{
        timestamps: false,
        freezeTableName: true
    }
})

const modelDefiners = [
    require('../models/champs'),
    require('../models/matchups'),
    require('../models/synergy')
]

for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize)
}

applyRelations(sequelize)

module.exports = sequelize;