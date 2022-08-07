const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')

export function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function seleccionarMascotaJugador() {
    debugger
    const inputCharmeleon = document.getElementById('charmeleon')
    const inputWartortle = document.getElementById('wartortle')
    const inputDiglett = document.getElementById('diglett')

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


export default seleccionarMascotaJugador