import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import credentials from "./credentials/credentials.js"

//* Importamos Rutas
import postRoutes from "./routes/posts.js"

//* Inicializamos la función express como app
const app = express()


//* Lo que ruteará en localhost:5000/posts
app.use('/posts',postRoutes)

//* Utilizamos bodyParser para enviar apropiadamente nuestras requests
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))

//* Is used to specitfy what domains can access the API
app.use(cors())

//* URL de la base de datos
const CONNECTION_URL = credentials.mongoDB
//* Puerto en el que se ejecutará el servidor
const PORT = process.env.port || 5000


//* Importamos las rutas a mongoose y las usamos
mongoose.connect(CONNECTION_URL)
    .then(()=>{
        //* Iniciamos el servidor una vez conectado a la base de datos
        app.listen(PORT,()=> console.log(`Server running on port http://localhost:${PORT}`))}
        )
    .catch((error)=>console.log(error.message))

