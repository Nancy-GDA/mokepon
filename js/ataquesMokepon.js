import combate from "./generarCombate.js"
import { aleatorio } from "./seleccionMascotas.js"

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
export const ataquePikachu = [
    {
        id:'hierbaLazo',
        nombre: 'Hierba Lazo',
        tipo:'Tierra 🍃'
    },
    {
        id:'sacredFirePlus',
        nombre: 'Sacred Fire Plus',
        tipo:'Fuego 🔥'
    },
    {
        
        id:'ascuas',
        nombre: 'SofocAscuaso',
        tipo:'Fuego 🔥'
    },
    {
        id:'hidrocanon',
        nombre: 'Hidrocañon',
        tipo:'Agua 💧'
    }
]


function ataqueEnemigo (mokeponEnemigo) {
    const indice = aleatorio(mokeponEnemigo.ataques.length - 1)
    const ataque = mokeponEnemigo.ataques[indice]
    mokeponEnemigo.atacar(ataque.nombre, ataque.tipo)
}
export function lanzarAtaque(ataque, mokepon, mokeponEnemigo){
    document.querySelector(`#${ataque.id}`).addEventListener('click', () => {
        mokepon.atacar(ataque.nombre, ataque.tipo)
        ataqueEnemigo(mokeponEnemigo)

        combate(mokepon, mokeponEnemigo)
    })
}