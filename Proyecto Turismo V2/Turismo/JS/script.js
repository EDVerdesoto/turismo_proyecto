let interruptor = true;
        
const linksMenuResponsivo = document.getElementsByClassName("links-menu-responsivo");
for(let i = 0; i < linksMenuResponsivo.length; i++){
    linksMenuResponsivo[i].addEventListener('mouseover', () => {
        linksMenuResponsivo[i].style.color = "hsl(183, 40%, 72%)";
        linksMenuResponsivo[i].style.transition = "0.5s";
    });
    linksMenuResponsivo[i].addEventListener('mouseout', () => {
        linksMenuResponsivo[i].style.color = "white";
        linksMenuResponsivo[i].style.transition = "0.5s";
    });
}

items[i].addEventListener('mouseover', () => {
    items[i].style.color = "hsl(183, 40%, 72%)";
    items[i].style.transition = "0.5s";
});

items[i].addEventListener('mouseout', () => {
    items[i].style.color = "white";
    items[i].style.transition = "0.5s";
});

function abrir_link() {
    open("index.html" , target=_self);
}


function desplegar_menu(){
    if(interruptor){
        
        document.querySelector(".responsive-menu").style.display = "flex";
        document.querySelector(".nav-mobile").style.display = "none";

        interruptor = false;

    }else{
        document.querySelector(".responsive-menu").style.display = "none";
        document.querySelector(".nav-mobile").style.display = "flex";

        interruptor = true;
    }

}
