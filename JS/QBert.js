(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
  
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
     window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
     window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
  }
// Class KeyboardListener.
 function KeyboardListener() {

    // Properties.
    window.onload=function(){document.onkeydown=desplazar}; 

    x=0; y=0;
    //imagen del personaje
    var spriteSheet = new Image();
    spriteSheet.onload = function(){
      contexto.drawImage(spriteSheet, 55, 45, 110, 85, x, y, 90, 85);
    }
    spriteSheet.src = '../Imagenes/sprite.png';

    
//Funcion de los movimientos del personaje principal
    function desplazar(objeto){
    var tecla = objeto.which;
    
        var CordY = document.getElementById("personaje").offsetLeft;
        var CordX = document.getElementById("personaje").offsetTop;

        if (tecla == 37) { // movimiento del lado izquierdo
        	for (var acum =1; acum <= 2; acum++) {
        		switch (acum) {
        			case 1:
        				cuadrado.style.left = CordY-222+"px"; break;
        			case 2:
        				cuadrado.style.top = CordX-222+"px"; break;
        		} 
        	}
        }

        if (tecla== 38) { //movimiento del lado de arriba
        	for (var acum = 1; acum<=2; acum++){
        		switch (acum) {
        			case 1:
        				cuadrado.style.top = CordX-222+"px"; break;
        			case 2:
        				cuadrado.style.left = CordY-182+"px"; break;						
        		}
        	}	
        }

        if (tecla == 39) { //movimiento del lado derecho
        	for (var acum = 1; acum<=2; acum++){
        		switch (acum){
        			case 1:
        				cuadrado.style.top = CordX-182+"px"; break;
        			case 2:
        				cuadrado.style.left = CordY-182+"px"; break;
        		}
        	}	
        }

        if (tecla== 40) { //movimiento del lado de abajo
        	for (var acum = 1; acum<=2; acum++){
        		switch (acum) {
        			case 1:
        				cuadrado.style.top = CordX-182+"px"; break;
        			case 2:
        				cuadrado.style.left = CordY-222+"px"; break;
        		}
        	}	
        }
    }



  // Class Character.
function Character() {
    // Properties.
    this.image = new Image(); this.image.src = "../Imagenes/qbert.png";
    this.xPos = 50; this.yPos = 300;
    this.died = false;
   
   //Sigue el codigo
   }




