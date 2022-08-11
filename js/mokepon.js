import { aleatorio } from "./seleccionMascotas.js"
class Mokepones{
    constructor(nombre, ataques, imagen, vidas = 3){
        this.nombre = nombre
        this.ataques = ataques
        this.vidas = vidas
        this.imagen = imagen 
        this.checked = false
        this.tipo = false
        

    }
/*se setea el valor que se esta trayendo el cheked y
 se cambia dependiendo si se seleccion */
    set setChecked (checked){
        this.checked = checked
    }

    atacar (ataque,tipoAtaque){
        alert(`Mokepon ${this.nombre} ataco con ${ataque} y mi tipo es ${tipoAtaque}`)
    }

    danoRecibido(mokeponEnemigo) {
        const indice = aleatorio(mokeponEnemigo.ataques.length - 1)
        const ataque = mokeponEnemigo.ataques[indice]
        alert(`Recibi el ataque ${ataque.nombre} y el tipo es ${ataque.tipo}, del Mokepon ${mokeponEnemigo.nombre}`)
        return ataque.tipo
    }
}

export default Mokepones