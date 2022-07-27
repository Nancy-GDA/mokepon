let ataqueJugador
let ataqueEnemigo

//Inicio de juego

function iniciarJuego (){
    let btn_mascotas = document.getElementById('btn-seleccion')
    btn_mascotas.addEventListener('click',seleccionarMascotas)

    let btn_fuego = document.getElementById('btn-fuego')
    btn_fuego.addEventListener('click',ataqueFuego)
    let btn_agua = document.getElementById('btn-agua')
    btn_agua.addEventListener('click',ataqueAgua)
    let btn_tierra = document.getElementById('btn-tierra')
    btn_tierra.addEventListener('click',ataqueTierra)
}

//funcion donde se eligen las mascotas
function seleccionarMascotas (){
    selectionarMiMascota()
    seleccionarMascotasEnemigo()
}
//Funcion donde seleccion mi mascota
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
    seleccionarMascotasEnemigo()
}
//funcion de seleccion de contrincante  
function seleccionarMascotasEnemigo(){
    let mascotasAleatorias = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascotas-enemigo')

    if(mascotasAleatorias == 1){
        spanMascotaEnemigo.innerHTML = 'Charmelon'
    } else if (mascotasAleatorias == 2){
        spanMascotaEnemigo.innerHTML = 'Wartortle'
    } else {
        spanMascotaEnemigo.innerHTML = 'Diglett'
    }
}
//Ataques
function ataqueFuego(){
    ataqueJugador = 'Fuego'
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador = 'Agua'
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador = 'Tierra'
    ataqueAleatorioEnemigo()
}

//Ataque aleatorio del contrincante
function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio == 1){
        ataqueEnemigo = 'Fuego'
    } else if (ataqueAleatorio == 2){
        ataqueEnemigo = 'Agua'
    } else{
        ataqueEnemigo = 'Tierra'
    }
  combate()
}
//Aqui inicia el combate y se sabe quien gana 
function combate (){
    if(ataqueJugador == ataqueEnemigo){
        crearMensaje("  Empate")
    }else if(ataqueJugador == 'Fuego' && ataqueEnemigo == 'Tierra'){
        crearMensaje("  Ganaste")
    } else if( ataqueJugador == 'Agua' && ataqueEnemigo == 'Fuego'){
        crearMensaje("  Ganaste")  
    } else if(ataqueJugador == 'Tierra' && ataqueEnemigo == 'Agua'){
        crearMensaje("  Ganaste") 
    } else {
       crearMensaje("  Perdiste")
    }   
}

//panel visible de ataques seleccionados
function crearMensaje(resultadoBatalla){
    let seccionMensaje = document.getElementById ('mensaje')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJugador  + ' la mascota del enemigo atacó con ' + ataqueEnemigo +  resultadoBatalla

    seccionMensaje.appendChild(parrafo)
}
//Seleccion aleatoria de la mascota del contrincante
function aleatorio(min,max){
    return Math.floor(Math.random() * (max -min + 1) + min)
}


window.addEventListener('load',iniciarJuego)


