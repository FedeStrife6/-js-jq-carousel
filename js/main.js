$(document).ready(function(){
  //Cliccando sull'icona NEXT su schermo si visualizzerà l'immagine successiva
  $('.slider-wrapper .next').click(  //mantenere spazio tra genitore e figli
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
  var slideCorrente = $('img.active');
    slideCorrente.removeClass('active');

//Aggiunge la classe active alla slide succesiva
  var cerchiettoCorrente = $('i.active');
    cerchiettoCorrente.removeClass('active');

  if (slideCorrente.hasClass('last')) {
    $('img.first').addClass('active');
    $('i.first').addClass('active');
      } else {
        slideCorrente.next('img').addClass('active');
        cerchiettoCorrente.next('i').addClass('active');
      }
}

function slidePrecedente() {
  var slideCorrente = $('.images img.active');
    slideCorrente.removeClass('active');

  var cerchiettoCorrente = $('.nav i.active');
    cerchiettoCorrente.removeClass('active');

    if(slideCorrente.hasClass('first')) {
      $('img.last').addClass('active');
      $('i.last').addClass('active');
    } else {
        slideCorrente.prev('img').addClass('active');
        cerchiettoCorrente.prev('i').addClass('active');
    }
}
// Come fare per rendere i pallini cliccabili?
