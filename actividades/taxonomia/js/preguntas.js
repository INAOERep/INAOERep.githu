var respuesta_correcta;
var dato_interesante;
var imagenes = ["img/Vesta.jpg", "img/Lutetia.jpg", "img/Aeternitas.jpg", "img/Pallas.jpg"];
var respuestas = [["Tipo V", "Tipo B", "Tipo R", "Tipo A", "Tipo Xc"], ["Tipo Xc", "Tipo B", "Tipo R", "Tipo V", "Tipo A"], ["Tipo A", "Tipo B", "Tipo R", "Tipo V", "Tipo Xc"], ["Tipo B", "Tipo A", "Tipo R", "Tipo V", "Tipo Xc"]];
var datos = ["Este asteroide es el segundo más grande del cinturon principal con un diametro de 530 km.",
  "Primer asteroide descubierto por un astrónomo aficionado en 1852.",
  "Su nombre está dedicado a la personificación del concepto de Eternidad.",
  "Este asteroide es el tercero más grande del cinturón principal con un diametro de 512 km."]
  
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
    txt_respuestas += '<input type="radio" name="cuestionario" value="' + i + '"><label>' + respuestas_reordenadas[i] + '</label><br>';
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
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
}

// Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    }
