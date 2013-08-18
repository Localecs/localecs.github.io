$(function(){
	//Slide principal
  $('.slide').bxSlider({
   auto: true,
    controls: false,
    pause: 10000
  });

 //Fim da função principal
});

//Menu scrolling
//posicaoScroll é um integer em Millisegundos
function menu(posicaoScroll){
	$('html, body').animate({scrollTop:posicaoScroll},1500);
}




