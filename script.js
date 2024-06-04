let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")

function abreFechaMenu() {
    //Menu fechado -  tem a classe menu-fechado
    //Menu aberto - não tem a classe menu-fechado 

    //se o menu contem a classe menu-fechado
    if (menu.classList.contains("menu-fechado")) {
        //Abrir o menu - remover a classe menu-fechado 
        menu.classList.remove("menu-fechado")

        //mostrar icone barras 
        //esconder o icone do x 

        iconeBarras.style.display = "none"

        iconeX.style.display = "inline"


    } else {
        //fechar o menu - adicionar a classe menu-fechado 
        menu.classList.add("menu-fechado")


        iconeBarras.style.display = "inline"

        iconeX.style.display = "none"
        //mostrar o icone do x 
        //esconder o icone barras 

    }
}

onreset = () => {
    menu.classList.contains("menu-fechado")

    //Abrir o menu - remover a classe menu-fechado 
    menu.classList.remove("menu-fechado")

    //mostrar icone barras 
    iconeBarras.style.display = "none"

    //esconder o icone do x 
    iconeX.style.display = "inline"

}