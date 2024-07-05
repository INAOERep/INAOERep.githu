var respuesta_correcta;
var dato_interesante;
var imagenes = ["img/Ceres.jpg", "img/2001 CP44.jpg", "img/1468 Zomba (1938 PA).jpg", "img/2020 UX3.jpg"];
var respuestas = [["MBA", "TNO", "Centauro", "Troyano", "NEA"], ["NEA", "TNO", "Centauro", "Troyano", "MBA"], ["MBA", "TNO", "Centauro", "Troyano", "NEA"], ["NEA", "TNO", "Centauro", "Troyano", "MBA"]];
var datos = ["Este asteroide es especial por haber sido el primero en ser descubierto.",
  "A este tipo de asteroides se les llama Mars-crossing, pues en inglés se refiere a que cruza con la órbita de Marte.",
  "A este tipo de asteroides se les llama Mars-crossing, pues en inglés se refiere a que cruza con la órbita de Marte.",
  "Por tener un MOID=0.0318381 AU, este asteroide es un PHA, por lo que está en constante monitoreo por los científicos."]

function cambiar() {
  var al = Math.floor(Math.random() * imagenes.length);
  var respuestas_posibles = respuestas[al];
  dato_interesante = datos[al];
  var tengo_la_respuesta = false;
  var posiciones = [0, 1, 2, 3, 4];
  var respuestas_reordenadas = [];
  for (i in respuestas_posibles) {
    var posicion_al = Math.floor(Math.random() * posiciones.length);
    if (posicion_al == 0 && tengo_la_respuesta == false) {
      respuesta_correcta = i;
      tengo_la_respuesta = true;
    }
    respuestas_reordenadas[i] = respuestas_posibles[posiciones[posicion_al]];
    posiciones.splice(posicion_al, 1);
  }

  document.getElementById("ia").src = imagenes[al];

  var txt_respuestas = "";
  for (i in respuestas_reordenadas) {
    txt_respuestas += '<input type="radio" name="cuestionario" value="' + i + '"><label>' + respuestas_reordenadas[i] + '</label>';
  }
  document.getElementById("respuestas").innerHTML = txt_respuestas;
}

function comprobar() {
  var respuesta = $("input[type=radio]:checked").val()
  if (respuesta == respuesta_correcta) {
    alert('Respuesta correcta. ' + dato_interesante);
  } else {
    alert("Inténtalo de nuevo");
  }
}


var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("ia");
var modalImg = document.getElementById("img");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}