export const ataqueCharmander = [
    {
        id:'rafaga',
        nombre: 'Rafaga',
        tipo: 'Fuego 🔥'
    },
    {
        id:'evaporacion',
        nombre: 'Evaporacion',
        tipo: 'Fuego 🔥'
    },
    {
        id:'bodetonLodo',
        nombre: 'Bofeton lodo',
        tipo:'Tierra 🍃'
    },
    {
        id:'pistolaDeAgua',
        nombre: 'Pistola de agua ',
        tipo:'Agua 💧'
    }
]
export const ataqueWartortle = [
    {
        id:'tecnoShock',
        nombre: 'Tecno shock',
        tipo:'Agua 💧'
    },
    {
        id:'planchaVoladora',
        nombre: 'Plancha voladora',
        tipo:'Agua 💧'
    },
    {
        id:'vDeFuego',
        nombre: 'V de fuego',
        tipo: 'Fuego 🔥'
    },
    {
        id:'semilladora',
        nombre: 'Semilladora',
        tipo:'Tierra 🍃'
    }
]

export const ataqueDiglett = [
    {
        id:'bodetonLodo',
        nombre: 'Bofeton lodo',
        tipo:'Tierra 🍃'
    },
    {
        id:'terremoto',
        nombre: 'Terremoto',
        tipo:'Tierra 🍃'
    },
    {
        
        id:'sofoco',
        nombre: 'Sofoco',
        tipo:'Fuego 🔥'
    },
    {
        id:'surf',
        nombre: 'Surf',
        tipo:'Agua 💧'
    }
]

export function lanzarAtaque(ataque,mokepon){
    document.querySelector(`#${ataque.id}`).addEventListener('click', () =>{
      mokepon.atacar(ataque.nombre,ataque.tipo)
    })
}