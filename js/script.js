function cadastrarNewsletter(){
   let email = document.getElementById ("campo-email") .value

}
function mostrarMenu($evento){

    //identificar o elemento do menu
    let menu = document.getElementById ("menu")
if (getComputedStyle(menu).display == "none") {
    menu.style.display = "flex"    
}
    else{
        menu.style.display = "none"
    }
    // mudar a visualização do menu 
menu.style.display = "flex"

event.preventDefault ();
}
