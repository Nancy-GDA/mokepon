const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')

const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const sectionReiniciar = document.getElementById('reiniciar')

export default function combate(miMokepon, mokeponEnemigo) {
    const ataqueEnemigo = mokeponEnemigo.ultimoAtaque.tipo
    const miAtaque = miMokepon.ultimoAtaque.tipo

    if(ataqueEnemigo == miAtaque) {
        crearMensaje("EMPATE", miMokepon, mokeponEnemigo)
    } else if(miAtaque == 'Fuego 🔥' && ataqueEnemigo == 'Tierra 🍃') {
        crearMensaje("GANASTE 🎉 🎊", miMokepon, mokeponEnemigo)
        mokeponEnemigo.restarVidas()
        spanVidasEnemigo.innerHTML = mokeponEnemigo.vidas
    } else if(miAtaque  == 'Agua 💧' && ataqueEnemigo == 'Fuego 🔥') {
        crearMensaje("GANASTE 🎉 🎊", miMokepon, mokeponEnemigo)
        mokeponEnemigo.restarVidas()
        spanVidasEnemigo.innerHTML = mokeponEnemigo.vidas
    } else if(miAtaque == 'Tierra 🍃' && ataqueEnemigo == 'Agua 💧') {
        crearMensaje("GANASTE 🎉 🎊", miMokepon, mokeponEnemigo)
        mokeponEnemigo.restarVidas()
        spanVidasEnemigo.innerHTML = mokeponEnemigo.vidas
    } else {
        crearMensaje("PERDISTE 😔 ☹️", miMokepon, mokeponEnemigo)
        miMokepon.restarVidas()
        spanVidasJugador.innerHTML = miMokepon.vidas
    }

    revisarVidas(mokeponEnemigo.vidas, miMokepon.vidas)
}

function revisarVidas(vidasEnemigo, vidasJugador) {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("FELICITACIONES! Ganaste 🎉 😃")
    } else if (vidasJugador == 0) {
        crearMensajeFinal('Lo siento, perdiste 😔 ☹️')
    }
}

function crearMensaje(resultado, miMokepon, mokeponEnemigo) {
    let mensaje1 = ''
    let mensaje2 = ''
    sectionMensajes.innerHTML = resultado

    miMokepon.tipoAtaque.forEach(ataque => {
        mensaje1 = `${mensaje1} ${ataque.ataque} (${ataque.tipo}) \n`
    })

    mokeponEnemigo.tipoAtaque.forEach(ataque => {
        mensaje2 = `${mensaje2} ${ataque.ataque} (${ataque.tipo}) \n`
    })

    ataquesDelJugador.innerText = mensaje1
    ataquesDelEnemigo.innerText = mensaje2
    
}

function crearMensajeFinal(resultadoFinal) {
    sectionMensajes.innerHTML = resultadoFinal
    document.querySelectorAll('.boton-ataques').forEach(function(elemento) {
        elemento.disabled = true
    })

    sectionReiniciar.style.display = 'flex'
}