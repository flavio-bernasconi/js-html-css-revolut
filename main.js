$( document ).ready(function() {
    $(".drop").click(
      function(){
        $(this).children(".content-drop").toggleClass("active");
      }
    )
});

//
