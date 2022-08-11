const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')

const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

let vidasJugador = 3
let vidasEnemigo = 3

export default function combate(ataqueJugador, ataqueEnemigo) {

    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE", ataqueEnemigo, ataqueJugador)
    } else if(ataqueJugador == 'FUEGO 🔥' && ataqueEnemigo == 'TIERRA 🍃') {
        crearMensaje("GANASTE 🎉 🎊", ataqueEnemigo, ataqueJugador)
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'AGUA 💧' && ataqueEnemigo == 'FUEGO 🔥') {
        crearMensaje("GANASTE 🎉 🎊", ataqueEnemigo, ataqueJugador)
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'TIERRA 🍃' && ataqueEnemigo == 'AGUA 💧') {
        crearMensaje("GANASTE 🎉 🎊", ataqueEnemigo, ataqueJugador)
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE 😔 ☹️", ataqueEnemigo, ataqueJugador)
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas(vidasEnemigo, vidasJugador)
}

function revisarVidas(vidasEnemigo, vidasJugador) {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("FELICITACIONES! Ganaste 🎉 😃")
    } else if (vidasJugador == 0) {
        crearMensajeFinal('Lo siento, perdiste 😔 ☹️')
    }
}

function crearMensaje(resultado, ataqueEnemigo, ataqueJugador) {

    sectionMensajes.innerHTML = resultado

    ataquesDelJugador.innerText = ataqueJugador
    ataquesDelEnemigo.innerText = ataqueEnemigo
}

function crearMensajeFinal(resultadoFinal) { 
    sectionMensajes.innerHTML = resultadoFinal

    // botonFuego.disabled = true
    // botonAgua.disabled = true
    // botonTierra.disabled = true
    sectionReiniciar.style.display = 'flex'
}