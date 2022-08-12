import { lanzarAtaque } from "./ataquesMokepon.js"

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')


export function aleatorio(max) {
    const min = 0
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function seleccionarMascotaJugador(listaMokepones) {
    const miMascota = seEncontroMokepon(listaMokepones)
/*Dependiendo el valor que traiga la funcion seEncontroMokepon ve se ejecuta
la condicional if y muestra el alert y frena la ejecucion*/
    if(!miMascota){
        alert('Selecciona Mascota')
        return 
    }

    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'
    
    const enemigo = seleccionarMascotaEnemigo(listaMokepones)
    return {
        miMascota: miMascota,
        mascotaEnemigo: enemigo
    }
}

 function seEncontroMokepon (arregloMascotas){
    //traego mi arreglo como objeto y su elemento que es mokepon 
    
    for (const mascota of arregloMascotas) {
        //mando llamar el id del elemento html y el atributo nombre 
        const elementoMokepon = document.querySelector(`#${mascota.nombre.toLowerCase()}`)
        //verifico que este chequeado uno a uno y paro hasta donde lo este 
        if(elementoMokepon.checked){
            mascota.setChecked = true
            spanMascotaJugador.innerText = mascota.nombre
            return mascota
        }

    }
    return false

}

export function seleccionarMascotaEnemigo(listadoMascotas) {
    const mascotaAleatoria = aleatorio(listadoMascotas.length - 1)
    const mascota = listadoMascotas[mascotaAleatoria]
    spanMascotaEnemigo.innerText = mascota.nombre
    return mascota
}


export default seleccionarMascotaJugador