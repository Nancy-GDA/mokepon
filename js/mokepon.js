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
        alert(`Soy el ataque ${ataque} y mi tipo es ${tipoAtaque}`)
    }
}

export default Mokepones