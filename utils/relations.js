const sequelize = require("./database")

function applyRelations(sequelize){
    console.log(sequelize.models)
    const Champs = sequelize.models.champs
    const Matchups = sequelize.models.matchups
    const Synergy = sequelize.models.synergy

    Champs.belongsToMany(Champs, {as:'winner', through:Matchups})
    Champs.belongsToMany(Champs, {as: 'loser', through:Matchups})

    Champs.belongsToMany(Champs, {as: '1', through:Synergy})  
    Champs.belongsToMany(Champs, {as: '2', through:Synergy})   

}
module.exports = {applyRelations}