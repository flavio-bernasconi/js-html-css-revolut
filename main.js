$( document ).ready(function() {



    $(".drop").click(
      function(){
        //rimuovi a tutti la classe active
        $(".content-drop").removeClass("active");
        //aggiungi la classe attiva solo al figlio di questo drop
        $(this).children(".content-drop").addClass("active");
      }
    );

    $(document).click(function(){
      $(".content-drop").removeClass("active");
    });

    $(".drop").click(function(e){
      e.stopPropagation();
    });


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










});

//
