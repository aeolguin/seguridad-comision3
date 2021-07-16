//requerir los modulos que voy a utilizar
const express = require ('express');
const app = express();
require('dotenv').config()
const cors = require('cors')
const appRoutes = require('./routes/app.routes')
const midd = require('./midd/midd')


//Middlewares - Globales
app.use(express.json())
app.use(cors())
app.use(midd.limiter)


//inicializar nuestro servidor
app.listen(process.env.PORT, ()=> {
    console.log('Servidor iniciado correctamente!')
})

//Llamar a mis rutas para poder accederlas
appRoutes(app);