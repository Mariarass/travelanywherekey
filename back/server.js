require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')
const cardRoutes=require('./routes/cardRoutes')
const ticketRoutes=require('./routes/ticketRoutes')

const cardRoutesEng=require('./routes/cardRoutesEng')
const ticketRoutesEng=require('./routes/ticketRoutesEng')

const app = express()
const PORT = process.env.PORT || 5000
var cors = require('cors')

app.use(cors()) // Use this after the variable declaration
connectDB()

app.use(express.json())
app.use('/api/card',cardRoutes)
app.use('/api/tour',ticketRoutes)
app.use('/api/cardEng',cardRoutesEng)
app.use('/api/tourEng',ticketRoutesEng)



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
