

document.getElementById('mostrarAlerta').addEventListener('click', function () {
  const swalWithBootstrapButtons = Swal.mixin({
    buttonsStyling: true // Habilitar estilos de SweetAlert2 para los botones
  });

  swalWithBootstrapButtons.fire({
    imageUrl:'https://img.freepik.com/vector-premium/insignia-o-icono-completo-nivel-juego-estrellas-doradas_8071-49766.jpg',
    imageWidth:'400px',
    imageHeight:'400px',
    imageAlt:'imageNextNevel',
    padding:'1rem',
    backdrop:true,
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
        imageUrl:'https://img.freepik.com/vector-premium/recompensa-subir-nivel-icono-oro-dibujos-animados-bandera_172107-1704.jpg?w=2000',
        imageWidth:'250px',
        imageHeight: '350px',
        title: "Genial!",
        text: "Sigamos Aprendiendo!!",
        icon: "success"
      });
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      swalWithBootstrapButtons.fire({
        title: "Reintentar Nivel",
        text: "Genial,Aprendamos Nuevamente!",
        icon: "error"
      });
    }
  });
});
Swal.fire({
  icon: "error",
  title: '<h2 class="dark-background">Oops...</h2>',
  html: '<b class="text-alarm dark-background">Juguemos de Nuevo<br>Te has Equivocado:(</b>',
  footer: '<a href="ayuda.html" class="enlace-ayuda dark-background">Necesitas Ayuda?</a>',
  
});
