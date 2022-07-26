import { lanzarAtaque } from "./ataquesMokepon.js"

const spanVidasJugador = document.querySelector('#vidas-jugador')
const spanVidasEnemigo = document.querySelector('#vidas-enemigo')

export function crearAtaques(ataque, mokepon, mokeponEnemigo){
    const botonAtaque = `
    <button class="boton-ataques" id="${ataque.id}" >
        ${ataque.nombre} <br />
        <span> ${ataque.tipo}</span>
    </button>
    `
    const contenedorAtaques = document.querySelector('#ataques')
    contenedorAtaques.innerHTML = `
        ${contenedorAtaques.innerHTML}
        ${botonAtaque}
    `

    spanVidasJugador.innerText = mokepon.vidas
    spanVidasEnemigo.innerText = mokeponEnemigo.vidas
    
    setTimeout(()=>{
        lanzarAtaque(ataque, mokepon, mokeponEnemigo)
    },300)
    
}


export function crearTarjetaMokepon(mokepon){
    //se crea estructura html y se asocia a una variable 
    const  estructuraTarjeta = `
            <input  type="radio" name="mascota" id="${mokepon.nombre.toLowerCase()}" />
            <label class="tarjeta-de-mokepon" for="${mokepon.nombre.toLowerCase()}">
                <p>${mokepon.nombre}</p>
                <img src="${mokepon.imagen}" alt="${mokepon.nombre}">
            </label>
        `
    //Creo variable que toma el selector de html como valor
    let elementoTarjetas = document.querySelector('.tarjetas')
    //inyecto al html lo que tengo como parametro en mi funcion y creo otro elemento 
    elementoTarjetas.innerHTML = `
            ${elementoTarjetas.innerHTML} 
            ${estructuraTarjeta}
        `
}