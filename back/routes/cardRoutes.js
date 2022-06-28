const express = require('express')
const { getAllCards,getCardById} = require('../controller/cardControllers')
const router = express.Router()

router.get('/',getAllCards
)

router.get('/:id',getCardById)



module.exports=router