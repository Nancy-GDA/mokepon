const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonTierra = document.getElementById('boton-tierra')
sectionReiniciar.style.display = 'none'
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const inputCharmeleon = document.getElementById('charmeleon')
const inputWartortle = document.getElementById('wartortle')
const inputDiglett = document.getElementById('diglett')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')

const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')


let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = 'none'
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
    botonReiniciar.addEventListener('click', reiniciarJuego)
    
}

function seleccionarMascotaJugador() {
    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'
    
    if (inputCharmeleon.checked) {
        spanMascotaJugador.innerHTML = 'Charmeleon'
    } else if (inputWartortle.checked) {
        spanMascotaJugador.innerHTML = 'Warlotle'
    } else if (inputDiglett.checked) {
        spanMascotaJugador.innerHTML = 'Diglett'
    } else {
        alert('Selecciona una mascota')
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1,3)

    if (mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = 'Charmeleon'
    } else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = 'Warlotle'
    } else {
        spanMascotaEnemigo.innerHTML = 'Diglett'
    }
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO 🔥'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'AGUA 💧'
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA 🍃'
    ataqueAleatorioEnemigo()
}

console.log(ataqueAleatorioEnemigo)
function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO 🔥'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA 💧'
    } else {
        ataqueEnemigo = 'TIERRA 🍃'
    }

    combate()
}

function combate() {

    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    } else if(ataqueJugador == 'FUEGO 🔥' && ataqueEnemigo == 'TIERRA 🍃') {
        crearMensaje("GANASTE 🎉 🎊")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'AGUA 💧' && ataqueEnemigo == 'FUEGO 🔥') {
        crearMensaje("GANASTE 🎉 🎊")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'TIERRA 🍃' && ataqueEnemigo == 'AGUA 💧') {
        crearMensaje("GANASTE 🎉 🎊")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE 😔 ☹️")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("FELICITACIONES! Ganaste 🎉 😃")
    } else if (vidasJugador == 0) {
        crearMensajeFinal('Lo siento, perdiste 😔 ☹️')
    }
}

function crearMensaje(resultado) {

    sectionMensajes.innerHTML = resultado

    ataquesDelJugador.innerText = ataqueJugador
    ataquesDelEnemigo.innerText = ataqueEnemigo
}

function crearMensajeFinal(resultadoFinal) { 
    sectionMensajes.innerHTML = resultadoFinal

    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
    sectionReiniciar.style.display = 'flex'
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)
