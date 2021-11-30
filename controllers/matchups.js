const Matchups = require('../utils/database').models.matchups

exports.addMatchup = (req, res)=>{
    console.log(req.body)
    Matchups.create(req.body)
        .then(result =>{
            console.log("Success creating matchup")
            res.json({estado:"success"})
        })
        .catch((err)=>{
            console.log(err)
            res.json({estado:"error"})
        })
}

exports.getStrongAgainst = (req,res)=>{
    Matchups.findAll({where: {id_winner: req.body.id_winner}})
    .then(matchups=>{
        console.log(matchups)
        res.json(matchups)
    })
    .catch(err=>{
        console.log(err)
        res.json({estado:"error"})
    })
}

exports.getWeakAgainst = (req,res)=>{
    Matchups.findAll({where: {id_loser: req.body.id_loser}})
    .then(matchups=>{
        console.log(matchups)
        res.json(matchups)
    })
    .catch(err=>{
        console.log(err)
        res.json({estado:"error"})
    })
}

exports.deleteMatchup = (req,res)=>{
    console.log(req.body)
    Matchups.destroy({
        where:{
            id_winner: req.body.id_winner,
            id_loser: req.body.id_loser
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