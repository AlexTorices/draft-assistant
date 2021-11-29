const express = require('express')
const router = express.Router()
const controller = require('../controller/champs')

router.get("/", controller.all)
router.post("/", controller.add)
router.put("/", controller.update)
router.delete("/", controller.delete)

module.exports = router