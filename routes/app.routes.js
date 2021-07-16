//requerir los modulos que voy a utilizar
const midd = require('../midd/midd')
const cors = require('cors')

//Exportar mis modulos
module.exports = (app)=> {

    app.get('/ping', async (req,res)=> {
        //Si llegue a este punto es que el servidor esta respondiendo
        res.status(200).json('pong')
    })

    app.get('/', cors(midd.corsOption), async (req,res)=> {
        //Si paso el midd y llego hasta a aca, lo dejo pasar y le respondo
        res.status(200).json('Estas dentro de mi lista blanca!')
    })
}