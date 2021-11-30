const Synergy = require('../utils/database').models.synergy
const { Op } = require("sequelize");

exports.postAddSynergy = (req, res)=>{
    console.log(req.body)
    Synergy.create(req.body)
        .then(result =>{
            console.log("Success creating synergy")
            res.json({estado:"success"})
        })
        .catch((err)=>{
            console.log(err)
            res.json({estado:"error"})
        })
}

exports.getSynergy = (req,res)=>{
    Synergy.findAll({where: {[Op.or]: [{id_1: req.body.champName},
                {id_2: req.body.champName }]}})
    .then(synergy=>{
        console.log(synergy)
        res.json(synergy)
    })
    .catch(err=>{
        console.log(err)
        res.json({estado:"error"})
    })
}

exports.deleteSynergy = (req,res)=>{
    console.log(req.body)
    Synergy.destroy({
        where:{
            id_1: req.body.id_1,
            id_2: req.body.id_2
        }
    })
    .then(()=>{
        console.log("Matchup successfully deleted")
        res.json("Successful deletion")
    })
    .catch(err=>{
        console.log(err)
        res.json({estado:"error"})
    })
}