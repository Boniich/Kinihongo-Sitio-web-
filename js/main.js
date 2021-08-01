$(document).ready(function(){

  var imgItems = $('.slider-lista li').length;

  var imgPos = 1;

  for(contar = 1; contar <= imgItems; contar++){

    $('.pagination').append('<li><span class="fa fas fa-circle"></span></li>');
  }

  $('.slider-lista li').hide();
  $('.slider-lista li:first').show();
  $('.pagination li:first').css({'color': '#1b9bff'});


  //Declaracion de FUNCIONES

  $('.pagination li').click(pagination);
  $('.right span').click(nextSlider);
  $('.left span').click(prevSlider);




  //iterador

 setInterval(function(){

   nextSlider();
  }, 5000);


  //FUNCIONES

  function pagination(){

    var paginationPos = $(this).index() +1;

    $('.slider-lista li').hide();
    $('.slider-lista li:nth-child('+paginationPos+')').fadeIn();


    $('.pagination li').css({'color': '#858585'});
    $(this).css({'color':'#1b9bff'});

    imgPos = paginationPos;



  }



      function nextSlider(){
        if(imgPos>=imgItems){

            imgPos=1;
        }else{

          imgPos++;
        }

        $('.pagination li').css({'color': '#858585'});
        $('.pagination li:nth-child('+imgPos+')').css({'color':'#1b9bff'});

        $('.slider-lista li').hide();
        $('.slider-lista li:nth-child('+imgPos+')').fadeIn();

      }


  function prevSlider(){
    if(imgPos<=1){

        imgPos=3;

    }else{

      imgPos--;
    }

    $('.pagination li').css({'color': '#858585'});
    $('.pagination li:nth-child('+imgPos+')').css({'color':'#1b9bff'});

    $('.slider-lista li').hide();
    $('.slider-lista li:nth-child('+imgPos+')').fadeIn();

  }



});
