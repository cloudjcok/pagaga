
const nav = document.querySelector('.nav');

window.addEventListener('scroll', function() {
  nav.classList.toggle('active', window.scrollY > 0);
});






//ESTE ES EL BOTON DEL MUTE DE LA PAGINA PRINCIPAL!
let audio = document.getElementById("miAudio");
let boton = document.getElementById("botonAudio");
function controlarAudio() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
//ESTE ES EL SONIDO DE LA CAJA DEL ANIMAL
function reproducirSonido() {
  let sonido = document.getElementById("miSonido");
  sonido.play();
}
// Asociar la función al evento clic de la imagen con id "miImagen"
let imagen = document.getElementById("miImagen");
imagen.addEventListener("click", function() {
    reproducirSonido();
    verificarRespuesta("animalElegido"); // Reemplaza "animalElegido" con la lógica para obtener la opción seleccionada
});

function reproducirSonidoCorrecto(){
  let sonido = document.getElementById("correcto");
  sonido.play();
}
// Asociar la función al evento clic de la imagen con id "Perro"
let Rcorrect = document.getElementById("Perro");
Rcorrect.addEventListener("click", function() {
    reproducirSonidoCorrecto();
    mostrarAlerta();

});
function mostrarAlerta() {
  const swalWithBootstrapButtons = Swal.mixin({
    buttonsStyling: true // Habilitar estilos de SweetAlert2 para los botones
  });

  //ALARMA DE SIGUIENTE NIVEL!!!!
  swalWithBootstrapButtons.fire({
    imageUrl: 'https://img.freepik.com/vector-premium/insignia-o-icono-completo-nivel-juego-estrellas-doradas_8071-49766.jpg',
    imageWidth: '400px',
    imageHeight: '400px',
    imageAlt: 'imageNextNevel',
    padding: '1rem',
    backdrop: true,
    title:'<b class="title">Felicidades!<br>',
    html: '<b class="texto-alarm-Victoria">Has Desbloqueado el Siguiente Nivel</b>',
    icon: "success",
    showCancelButton: true,
    confirmButtonText: "Siguiente Nivel",
    cancelButtonText: "Repetir Nivel",
    footer:'<b class="footer-principal">Recuerda que no se guardaran los Cambios...<br>',
    allowOutsideClick: false,
    timer: 10000,
    timerProgressBar: true,
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire({
        imageUrl: 'https://img.freepik.com/vector-premium/recompensa-subir-nivel-icono-oro-dibujos-animados-bandera_172107-1704.jpg?w=2000',
        imageWidth: '250px',
        imageHeight: '350px',
        title: "Genial!",
        text: "Sigamos Aprendiendo!!",
        icon: "success"
      });
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      swalWithBootstrapButtons.fire({
        title: "Reintentar Nivel",
        text: "Genial, Aprendamos Nuevamente!",
        icon: "error"
      });
    }
  });
}
// Asociar la función al evento clic del botón
document.getElementById('mostrarAlerta').addEventListener('click', mostrarAlerta);


function reproducirSonidoIncorrecto(){
  let sonido = document.getElementById("incorrecto");
  sonido.play();
}
// Asociar la función al evento clic de la imagen con id "Leon"
let Rincorrect = document.getElementById("Leon");
Rincorrect.addEventListener("click", function() {
    reproducirSonidoIncorrecto();
    mostrarAlertaIncorrecta();
});
// Asociar la función al evento clic de la imagen con id "Leon"
let Rincorrect1 = document.getElementById("Gato");
Rincorrect1.addEventListener("click", function() {
    reproducirSonidoIncorrecto();
    mostrarAlertaIncorrecta();
});
// Función para mostrar la alarma de respuesta incorrecta
function mostrarAlertaIncorrecta() {
  Swal.fire({
    icon: "error",
  title: '<h2 class="dark-background">Oops...</h2>',
  html: '<b class="text-alarm dark-background">Juguemos de Nuevo<br>Te has Equivocado:(</b>',
  footer: '<a href="ayuda.html" class="enlace-ayuda dark-background">Necesitas Ayuda?</a>',
  
  });
}




