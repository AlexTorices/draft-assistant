const express = require('express')
const router = express.Router()
const matchupController = require('../controller/matchup')

router.get("/getMatchup", matchupController.getMatchup)
router.post("/addMatchup", matchupController.addMatchup)
router.post("/updateMatchup", matchupController.postUpdateMatchup)
router.delete("/deleteMatchup", matchupController.deleteMatchup)

module.exports = router