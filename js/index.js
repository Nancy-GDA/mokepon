import { crearAtaques , crearTarjetaMokepon} from "./renderizador.js"
import Mokepones from "./mokepon.js"
import seleccionarMascotaJugador, { aleatorio } from "./seleccionMascotas.js" 
import { ataqueCharmander,ataqueDiglett,ataqueWartortle, lanzarAtaque} from "./ataquesMokepon.js"

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
    const mascotaMoquepon = listadoMascotas()

    sectionSeleccionarAtaque.style.display = 'none'
    botonMascotaJugador.addEventListener('click', function (){
        const mokepon = seleccionarMascotaJugador(mascotaMoquepon)
        mokepon.ataques.forEach(function(ataque){
            crearAtaques(ataque,mokepon)
        })
    
    }) 
    // botonReiniciar.addEventListener('click', reiniciarJuego)
    
}

function listadoMascotas(){
    const mascotas = [
        new Mokepones ('Charmeleon', ataqueCharmander, './imagenes/charmeleon.png'), 
        new Mokepones ('Wartortle', ataqueWartortle, './imagenes/wartortle.png'), 
        new Mokepones ('Diglett', ataqueDiglett, 'imagenes/diglett.png'),
        new Mokepones ('Hipodoge', ataqueDiglett, 'imagenes/default.jpeg')
    ]

    mascotas.forEach(crearTarjetaMokepon)
    return mascotas

}


function ataqueFuego() {
    ataqueJugador = 'Fuego'
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
    let ataqueAleatorio = aleatorio(max)
    
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
