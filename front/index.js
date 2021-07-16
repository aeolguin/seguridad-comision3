
async function getApi () {
    let result = await fetch('http://localhost:3000/')
    let resultado = await result.json()
    return resultado
}

async function llamada () {
    let resultado = await getApi()
    console.log(resultado) 
}

llamada()