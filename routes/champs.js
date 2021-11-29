const express = require('express')
const router = express.Router()
const champController = require('../controllers/champs')

router.get("/getChamp", champController.getChamp)
router.post("/addChamp", champController.addChamp)
router.post("/updateChamp", champController.postUpdateChamp)
router.delete("/deleteChamp", champController.deleteChamp)

module.exports = router