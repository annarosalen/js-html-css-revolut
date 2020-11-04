$(document).ready(function () {


// aggiungere la classe active a dropdown quando clicco su li-drop
  $(".li-drop").click(function(){

    $(this).each(function(){
      $(".dropdown").toggleClass("active");
    });

  });

});
