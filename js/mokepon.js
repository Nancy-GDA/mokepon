function iniciarJuego (){
    let btn_mascotas = document.getElementById('btn-seleccion')
    btn_mascotas.addEventListener('click',seleccionarMascotas)
}
function seleccionarMascotas (){
    selectionarMiMascota()
    seleccionarMascotasEnemigo()
}

function selectionarMiMascota() {
    let item_charmelon = document.getElementById('charmeleon')
    let item_wartortle = document.getElementById('wartortle')
    let item_diglett = document.getElementById('diglett')
    let spanMascotaJugador = document.getElementById('mascota-jugador')
    
    if(item_charmelon.checked){
        spanMascotaJugador.innerHTML = 'Charmeleon'
    } else if (item_wartortle.checked){
        spanMascotaJugador.innerHTML = 'Wartortle'
    } else if (item_diglett.checked){
        spanMascotaJugador.innerHTML = 'Diglett'
    } else{
        alert("Selecciona una mascota")
    }
}
    
function seleccionarMascotasEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascotas-enemigo')

    if(ataqueAleatorio == 1){
        spanMascotaEnemigo.innerHTML = 'Charmelon'
    } else if (ataqueAleatorio == 2){
        spanMascotaEnemigo.innerHTML = 'Wartortle'
    } else {
        spanMascotaEnemigo.innerHTML = 'Diglett'
    }
}

function aleatorio(min,max){
    return Math.floor(Math.random() * (max -min + 1) + min)
}

window.addEventListener('load',iniciarJuego)


