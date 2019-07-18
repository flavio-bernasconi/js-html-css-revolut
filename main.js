$( document ).ready(function() {


  //funziona con hover
    // $(".drop").mouseenter(
    //   function(){
    //     $(this).children(".content-drop").addClass("active");
    //   }
    // );
    // $(".drop").mouseleave(
    //   function(){
    //     $(this).children(".content-drop").removeClass("active");
    //   }
    // );


    var cliccato = false;

    $(".drop").click(
      function(){
        $(this).children(".content-drop").toggleClass("active");
        cliccato = true;
        console.log(cliccato);
        if (cliccato == true) {
          $(".drop2").children(".content-drop").removeClass("active");
        }
      }

    );

    $(".drop2").click(
      function(){
        if (cliccato == true) {
          $(this).children(".content-drop").addClass("active");
          $(".drop").children(".content-drop").removeClass("active");
          cliccato = false;
          console.log(cliccato);
        }

      }
    );










});

//
