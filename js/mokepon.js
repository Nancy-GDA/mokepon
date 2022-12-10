class Mokepones{
    constructor(nombre, ataques, imagen, vidas = 3){
        this.nombre = nombre
        this.ataques = ataques
        this.vidas = vidas
        this.imagen = imagen 
        this.checked = false
        this.tipoAtaque = []
    }

/*se setea el valor que se esta trayendo el cheked y
 se cambia dependiendo si se seleccion */
    set setChecked (checked){
        this.checked = checked
    }
    get ultimoAtaque(){
        return this.tipoAtaque[this.tipoAtaque.length - 1]
    }

    atacar (ataque, tipoAtaque){
        this.tipoAtaque.push({
            ataque: ataque,
            tipo: tipoAtaque
        })
    }

    restarVidas() {
        this.vidas -= 1
    }
}

export default Mokepones