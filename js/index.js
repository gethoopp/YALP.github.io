$(".judul").velocity(

  {

     scale: 1.2
  },

  {
      duration: 900 , loop:1
  

});


function animate(){

      $(".uk-inline").velocity("transition.bounceUpIn",{stagger:150});

    }

    $(document).ready(function(){

           animate();
    })