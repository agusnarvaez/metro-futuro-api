import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

//* Inicializamos la función express como app
const app = express()

//* Utilizamos bodyParser para enviar apropiadamente nuestras requests
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))

//* Is used to specitfy what domains can access the API
app.use(cors())

