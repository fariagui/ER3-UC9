$(document).ready(function(){

    let slideAtual = 1  

    let ListaSlides = ["banner-f1", "banner-lol" , "banner-cs"]

    setInterval (mudarSlide, 2000);

function mudarSlide(){
    //remover o slide anterior

    if(slideAtual >0){
        $("#carrossel").removeClass(ListaSlides[slideAtual -1])

    }
    else{
        $("#carrossel").removeClass(ListaSlides[2])
    }

    $("#carrossel").removeClass(ListaSlides[slideAtual -1])
    
    //exibir o slide atual
    $("#carrossel").addClass(ListaSlides[slideAtual])


    // indicar qual slide atual 
    slideAtual ++
        if(slideAtual > 2 ){
            slideAtual = 0 
        }
        
    }

    $("#barras").click(function(){
        if ($("#menu").hasClass("menu-ativo")){
        $("#menu").removeClass("menu-ativo")
        }
       else{
       $("#menu").addClass("menu-ativo")
       }
    })
})



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
