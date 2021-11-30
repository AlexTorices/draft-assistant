const express = require('express')
const router = express.Router()
const matchupController = require('../controllers/matchups')

router.post("/addMatchup", matchupController.addMatchup)
router.get("/getStrongAgainst", matchupController.getStrongAgainst)
router.get("/getWeakAgainst", matchupController.getWeakAgainst)
router.delete("/deleteMatchup", matchupController.deleteMatchup)

module.exports = router