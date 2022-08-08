const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')

export function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function seleccionarMascotaJugador(listaMascota) {
    const encotrado = seEncontroMokepon(listaMascota)
/*Dependiendo el valor que traiga la funcion seEncontroMokepon ve se ejecuta
la condicional if y muestra el alert y frena la ejecucion*/
    if(encotrado == false){
        alert('Selecciona Mascota')
        return 
    }
console.log(listaMascota)
    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'
    
    seleccionarMascotaEnemigo()
}

 function seEncontroMokepon (arregloMascotas){
    //traego mi arreglo como obejto y su elemento que es mokepon 
    for (const mascota of arregloMascotas) {
        //mando llamar el id del elemento html y el atributo nombre 
        const elementoMokepon = document.querySelector(`#${mascota.nombre.toLowerCase()}`)
        //verifico que este chequeado uno a uno y paro hasta donde lo este 
        if(elementoMokepon.checked){
            mascota.setChecked = true
            return true
        }
    }
    return false

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


export default seleccionarMascotaJugador