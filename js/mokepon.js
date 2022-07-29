let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

//Inicio de juego


function iniciarJuego (){
    let selecionDeAtaques = document.getElementById('ataques')
    selecionDeAtaques.style.display = 'none'

    let seccionReiniciar = document.getElementById('btn-reinicio')
    seccionReiniciar.style.display = 'none'

    let btn_mascotas = document.getElementById('btn-seleccion')
    btn_mascotas.addEventListener('click',seleccionarMascotas)

    let btn_fuego = document.getElementById('btn-fuego')
    btn_fuego.addEventListener('click',ataqueFuego)
    let btn_agua = document.getElementById('btn-agua')
    btn_agua.addEventListener('click',ataqueAgua)
    let btn_tierra = document.getElementById('btn-tierra')
    btn_tierra.addEventListener('click',ataqueTierra)

    let  btn_reiniciar = document.getElementById('btn-reinicio')
    btn_reiniciar.addEventListener('click',reiniciarJuego)
}

//funcion donde se eligen las mascotas

function seleccionarMascotas (){
    selectionarMiMascota()
    seleccionarMascotasEnemigo()
}
//Funcion donde seleccion mi mascota

function selectionarMiMascota() {
    let seccionSeleccionarMiMascota = document.getElementById('seleccion-mascotas')
    seccionSeleccionarMiMascota.style.display = ' none'

    let selecionDeAtaques = document.getElementById('ataques')
    selecionDeAtaques.style.display = 'block'


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
    //Variable que almacena las vidas en el span 
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if(ataqueJugador == ataqueEnemigo){
        crearMensaje("  Empate")
    }else if(ataqueJugador == 'Fuego' && ataqueEnemigo == 'Tierra'){
        crearMensaje("  Ganaste")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if( ataqueJugador == 'Agua' && ataqueEnemigo == 'Fuego'){
        crearMensaje("  Ganaste") 
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'Tierra' && ataqueEnemigo == 'Agua'){
        crearMensaje("  Ganaste") 
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("  Perdiste")
        vidasJugador --
        spanVidasJugador.innerHTML = vidasJugador
    }   
    triunfoJugadores() 
}
function triunfoJugadores(){
    if(vidasEnemigo == 0 ){
        mensajeTriunfos("Felicitaciones  ganaste 😃 🥳 🎉 ")
    } else if (vidasJugador == 0 ){
        mensajeTriunfos("Lo siento perdiste 😔 😢 ☹️")
    } 
}
function mensajeTriunfos(mensajeFinal){
    let seccionMensaje = document.getElementById ('mensaje')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = mensajeFinal

    seccionMensaje.appendChild(parrafo)
}
function crearMensaje(resultadoBatalla){
    let seccionMensaje = document.getElementById ('mensaje')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJugador  + ' la mascota del enemigo atacó con ' + ataqueEnemigo +  resultadoBatalla

    seccionMensaje.appendChild(parrafo)

    let btn_fuego = document.getElementById('btn-fuego')
    btn_fuego.disabled = true
    let btn_agua = document.getElementById('btn-agua')
    btn_agua.disabled = true
    let btn_tierra = document.getElementById('btn-tierra')
    btn_tierra.disabled = true
    
    let seccionReiniciar = document.getElementById('btn-reinicio')
    seccionReiniciar.style.display = 'block'
}
function reiniciarJuego(){
    location.reload()
}
//Seleccion aleatoria de la mascota del contrincante
function aleatorio(min,max){
    return Math.floor(Math.random() * (max -min + 1) + min)
}

window.addEventListener('load',iniciarJuego)
