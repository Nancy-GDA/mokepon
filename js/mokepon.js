class Mokepones{
    constructor(nombre, ataque, imagen, vidas = 3){
        this.nombre = nombre
        this.ataque = ataque
        this.vidas = vidas
        this.imagen = imagen 
        this.checked = false
    }
/*se setea el valor que se esta trayendo el cheked y
 se cambia dependiendo si se seleccion */
    set setChecked (checked){
        this.checked = checked
    }
}

export default Mokepones