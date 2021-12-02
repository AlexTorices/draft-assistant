const express = require('express')
const router = express.Router()
const synergyController = require('../controllers/synergy')

router.post("/addSynergy", synergyController.postAddSynergy)
router.post("/getSynergy", synergyController.getSynergy)
router.delete("/deleteSynergy", synergyController.deleteSynergy)

module.exports = router