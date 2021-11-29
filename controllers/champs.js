const Champs = require('../utils/database').models.champs

exports.addChamp = (req, res)=>{
    console.log(req.body)
    Champs.create(req.body)
        .then(result =>{
            console.log("Success creating champ")
            res.json({estado:"success"})
        })
        .catch((err)=>{
            console.log(err)
            res.json({estado:"error"})
        })
}

exports.getChamp = (req,res)=>{
    Champs.findAll()
    .then(champs=>{
        console.log(champs)
        res.json(champs)
    })
    .catch(err=>{
        console.log(err)
        res.json({estado:"error"})
    })
}

exports.deleteChamp = (req,res)=>{
    console.log(req.body)
    Champs.destroy({
        where:{
            champName: req.body.champName
        }
    })
    .then(()=>{
        console.log("Champ successfully deleted")
        res.json("Successful deletion")
    })
    .catch(err=>{
        console.log(err)
        res.json({estado:"error"})
    })
}


exports.postUpdateChamp = (req,res)=>{
    console.log(req.body.keys)
    Champs.update({
        image: req.body.image
        },{
        where:{
            champName: req.body.champName
        }
    })
    .then(()=>{
        console.log("Champ successfully updated")
        res.json("Successful update")
    })
    .catch(err=>{
        console.log(err)
        res.json({estado:"error"})
    })
}