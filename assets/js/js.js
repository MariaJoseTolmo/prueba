$(document).ready(function(){
  //DESPLAZA RESPONSIVAMENTE LOS ELEMENTOS SEGÚN MENU EN NAV, VISIBLE BAJO LA BARRA DE NAVEGACIÓN 
    //Cuando se hace click en los elementos <a> ocurre la función que tienen como argumento el mismo evento
    $("a").on('click', function(event) {
        //Valida si el id del elemento no es igual a ""
      if (this.hash !== "") {
        // el metodo preventDefault se aplica al evento
        event.preventDefault();
        console.log(this);
        // se guarda en una variable string el id del elemento que es llamado por el donde el user hizo clic, recupentando el atributo hash
        var idaonclic = this.hash;
        // se define la variable donde se guardará la altura de nav ya sea movil o lapto
        var navHeight;
        //establecer si el menú está dispuesto para pantallas max-width: 768px o no
        var responsiveMovil=$("#navbarNav").hasClass("show");
        if(responsiveMovil){//evalua si nav tiene la clase "show"
            //altura de nav en movile
            // $("nav").animate({opacity: '0%'},{duration: 1000});
            navHeight=$("nav").height();
        }else{
            //altura de nav en laptop
            navHeight=$("nav").height();
        }//Fin if height nav
        //Se lleva con el evento scrolltop el elemento correspondiente sumando su ubicación mas la altura del nav en ese momento
        $('html, body').scrollTop($(idaonclic).offset().top-navHeight)
      } // Fin if preventDefault
    })//Fin de lo que se hace ante el evento clic en etiquetas a
  //CAMBIA LA VELOCIDAD DE DESPLAZAMIENTO DEL CARROUSEL, REPRODUCCIÓN AUTOMÁTICA Y CONTINUIDAD
      $('.carousel-inner').carousel({
        interval: 1500,
        ride: true,
        wrap:true
      })
  //NAVBAR SOLIDA AL BAJAR
    $(window).scroll(function () {
      console.log($(window).scrollTop());
      if($(window).scrollTop()>100){
        $("#navB").css("background-color","#17a3b8a8");
      }else{
        $("#navB").css("background-color","transparent");
      }
    })
      
  })