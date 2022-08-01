let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3 
function iniciarJuego(){
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display ='none'

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)
    
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click',ataqueFuego)
    
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click',ataqueAgua)
    
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click',ataqueTierra)
    
    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click',reiniciarJuego)
}
//Se selecciona el mokepon que se desea usar para jugar
function seleccionarMascotaJugador(){
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display='none'
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display='block'

    let inputCharmeleon = document.getElementById('charmeleon')
    let inputWartortle = document.getElementById('wartortle')
    let inputDiglett = document.getElementById('diglett')
    let spanMascotaJugador = document.getElementById('mascota-jugador')
    if(inputCharmeleon.checked){
        spanMascotaJugador.innerHTML = 'Charmeleon'
    }else if(inputWartortle.checked){
        spanMascotaJugador.innerHTML ='Wartortle'
    }else if(inputDiglett.checked){
        spanMascotaJugador.innerHTML='Diglett'
    }else{alert('Selecciona una mascota')}
seleccionarMascotaEnemigo()
}
function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')
    if(mascotaAleatoria == 1){
        spanMascotaEnemigo.innerHTML='Charmeleon'
    }else if(mascotaAleatoria == 2){
        spanMascotaEnemigo.innerHTML='Wartortle'
    }else{spanMascotaEnemigo.innerHTML='Diglett'}}
function ataqueFuego(){
    ataqueJugador='FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador ='AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador ='TIERRA'
ataqueAleatorioEnemigo()}
function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    if(ataqueAleatorio == 1){ataqueEnemigo='FUEGO'
    }else if(ataqueAleatorio == 2){ataqueEnemigo='AGUA'
    }else{ataqueEnemigo='TIERRA'
}
combate()}
//Inicia el combate
function combate(){
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')
    if(ataqueEnemigo == ataqueJugador){
        crearMensaje("EMPATE")
    }else if(ataqueJugador =='FUEGO'&&ataqueEnemigo == 'TIERRA'){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if(ataqueJugador =='AGUA'&&ataqueEnemigo == 'FUEGO'){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if(ataqueJugador == 'TIERRA'&&ataqueEnemigo == 'AGUA'){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML=vidasEnemigo
    }else{crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML=vidasJugador
    }
    revisarVidas()
}

function revisarVidas(){
    if(vidasEnemigo == 0){crearMensajeFinal("FELICITACIONES! Ganaste ")
    }else if(vidasJugador == 0){
        crearMensajeFinal('Lo siento, perdiste ')
    }
}
function crearMensaje(resultado){
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con '+ataqueJugador+', las mascota del enemigo atacó con '+ataqueEnemigo+'- '+resultado
    sectionMensajes.appendChild(parrafo)
}
function crearMensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo =  document.createElement('p')
    parrafo.innerHTML = resultadoFinal
    sectionMensajes.appendChild(parrafo)
//se crean los ataques y se desabilitan los botones
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display='block'}

//Reinicia el juego mediante la recarga completa de la pagina
function reiniciarJuego(){
    location.reload() 
}
//Funcion aleatoria para dar el animal aleatorio
function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
window.addEventListener('load',iniciarJuego)