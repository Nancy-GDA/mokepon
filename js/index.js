import { crearAtaques , crearTarjetaMokepon} from "./renderizador.js"
import Mokepones from "./mokepon.js"
import seleccionarMascotaJugador from "./seleccionMascotas.js" 
import { ataqueCharmander,ataqueDiglett,ataqueWartortle } from "./ataquesMokepon.js"

const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')

sectionReiniciar.style.display = 'none'
const botonReiniciar = document.getElementById('boton-reiniciar')

function iniciarJuego() {
    const mascotaMokepon = listadoMokepon()

    sectionSeleccionarAtaque.style.display = 'none'
    botonMascotaJugador.addEventListener('click', function (){
        const mascotasMokepon = seleccionarMascotaJugador(mascotaMokepon)
        mascotasMokepon.miMascota.ataques.forEach(function(ataque){
            crearAtaques(ataque, mascotasMokepon.miMascota, mascotasMokepon.mascotaEnemigo)
        })
    
    }) 
    // botonReiniciar.addEventListener('click', reiniciarJuego)    
}

function listadoMokepon(){
    const mokepones = [
        new Mokepones ('Charmeleon', ataqueCharmander, './imagenes/charmeleon.png'), 
        new Mokepones ('Wartortle', ataqueWartortle, './imagenes/wartortle.png'), 
        new Mokepones ('Diglett', ataqueDiglett, 'imagenes/diglett.png'),
        new Mokepones ('Hipodoge', ataqueDiglett, 'imagenes/default.jpeg')
    ]

    mokepones.forEach(crearTarjetaMokepon)
    return mokepones

}

function reiniciarJuego() {
    location.reload()
}

window.addEventListener('load', iniciarJuego)
