function iniciarJuego (){
    let btn_mascotas = document.getElementById('btn-seleccion')
    btn_mascotas.addEventListener('click',seleccionarMascotas)
}
function seleccionarMascotas (){
    let item_charmelon = document.getElementById('charmeleon')
    let item_wartortle = document.getElementById('wartortle')
    let item_diglett = document.getElementById('diglett')
    let spanMascotaJugador = document.getElementById('mascota-jugador')
    let spanMascotaEnemigo = document.getElementById('mascotas-enemigo')

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
window.addEventListener('load',iniciarJuego)


