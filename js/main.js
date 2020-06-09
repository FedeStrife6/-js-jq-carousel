$(document).ready(function(){
  //Cliccando sull'icona NEXT su schermo si visualizzerà l'immagine successiva
  $('.slider-wrapper.next').click(
    function() {
      slideSuccessiva();
    }
  )
  //Cliccando sull'icona PREV su schermo si visualizzerà l'immagine successiva
  $('.slider-wrapper .prev').click(
    function(){
      slidePrecedente();
    }
  )
});

function slideSuccessiva() {
    var slideCorrente = $('.images img.active');
    slideCorrente.removeClass('active');
