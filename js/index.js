import { crearAtaques , crearTarjetaMokepon} from "./renderizador.js"
import Mokepones from "./mokepon.js"
import seleccionarMascotaJugador from "./seleccionMascotas.js" 
import { ataqueCharmander,ataqueDiglett,ataqueWartortle ,ataquePikachu} from "./ataquesMokepon.js"

const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReiniciar = document.getElementById('boton-reiniciar')

function iniciarJuego() {
    const mascotaMokepon = listadoMokepon()

    botonMascotaJugador.addEventListener('click', function (){
        const mascotasMokepon = seleccionarMascotaJugador(mascotaMokepon)
        mascotasMokepon.miMascota.ataques.forEach(function(ataque){
            crearAtaques(ataque, mascotasMokepon.miMascota, mascotasMokepon.mascotaEnemigo)
        })
    
    }) 
    
    botonReiniciar.addEventListener('click', reiniciarJuego)    
}

function listadoMokepon(){
    const mokepones = [
        new Mokepones ('Charmeleon', ataqueCharmander, './imagenes/charmeleon.png'), 
        new Mokepones ('Wartortle', ataqueWartortle, './imagenes/wartortle.png'), 
        new Mokepones ('Diglett', ataqueDiglett, 'imagenes/diglett.png'),
        new Mokepones ('Pikachu', ataquePikachu, 'imagenes/pikachu.png')
    ]

    mokepones.forEach(crearTarjetaMokepon)
    return mokepones

}

function reiniciarJuego() {
    location.reload()
}

window.addEventListener('load', iniciarJuego)
