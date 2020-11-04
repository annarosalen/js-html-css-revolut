$(document).ready(function () {


// aggiungere la classe active a dropdown quando clicco su li-drop
  $(".li-drop").each(function(){

    $(this).click(function(){
      var liActive = $(".dropdown");
      liActive.removeClass("active");

      $(this).find(".dropdown").addClass("active");
    });
  
  });

});
