//Requerimos los modulos que vamos a utilizar
const rateLimit = require('express-rate-limit')

//Exportamos nuestros modulos
const corsOption = {
    origin : function (origin, callback) {
        console.log(origin)
        if (process.env.listaBlanca.indexOf(origin) !== -1){
            callback(null, true)
        }else {
            callback(new Error('No autorizado por Cors'))
        }
    }
}

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, //15 minutos
    max:10, //Limita a 10 intentos de acceso o request por windosMs
    message: 'Usted exedio la cantidad maxima de intentos en este servidor!'
})

module.exports = {corsOption, limiter}