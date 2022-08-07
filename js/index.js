import Mokepones from "./mokepon.js"
import seleccionarMascotaJugador, { aleatorio } from "./seleccionMascotas.js" 
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonTierra = document.getElementById('boton-tierra')
sectionReiniciar.style.display = 'none'
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonReiniciar = document.getElementById('boton-reiniciar')

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
    listadoMascotas()

    sectionSeleccionarAtaque.style.display = 'none'
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
    botonReiniciar.addEventListener('click', reiniciarJuego)
    
}

function listadoMascotas(){

    const mascotas = [
        new Mokepones ('Charmeleon', ['Fuego', 'Agua'], './imagenes/charmeleon.png'), 
        new Mokepones ('Wartortle', ['Agua'], './imagenes/wartortle.png'), 
        new Mokepones ('Diglett', ['Tierra'], 'imagenes/diglett.png'),
        new Mokepones ('Hipodoge', ['Fuergo', 'Tierra'], 'imagenes/default.jpeg')
    ]

    mascotas.forEach(crearTarjetaMokepon)

}



function crearTarjetaMokepon(mokepon){
    //se crea estructura html y se asocia a una variable 
    const  estructuraTarjeta = `
            <input  type="radio" name="mascota" id="${mokepon.nombre.toLowerCase()}" />
            <label class="tarjeta-de-mokepon" for="${mokepon.nombre.toLowerCase()}">
                <p>${mokepon.nombre}</p>
                <img src="${mokepon.imagen}" alt="${mokepon.nombre}">
            </label>
        `
    //Creo variable que toma el selector de html como valor
    let elementoTarjetas = document.querySelector('.tarjetas')
    //inyecto al html lo que tengo como parametro en mi funcion y creo otro elemento 
    elementoTarjetas.innerHTML = `
            ${elementoTarjetas.innerHTML} 
            ${estructuraTarjeta}
        `
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

window.addEventListener('load', iniciarJuego)
