const express = require('express')
const router = express.Router()
const synergyController = require('../controller/synergy')

router.get("/getSynergy", synergyController.getSynergy)
router.post("/addSynergy", synergyController.postAddSynergy)
router.post("/updateSynergy", synergyController.postUpdateSynergy)
router.delete("/deleteSynergy", synergyController.deleteSynergy)

module.exports = router