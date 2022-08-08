export function crearAtaques(ataque){
    const botonAtaque = `
    <button class="boton-ataques" id="${ataque} " >${ataque}</button>
    `
    const contenedorAtaques = document.querySelector('#ataques')
    contenedorAtaques.innerHTML = `
        ${contenedorAtaques.innerHTML}
        ${botonAtaque}
    `
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