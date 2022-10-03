var respuesta_correcta;
          
var nombres = ["Fue el primer asteroide en ser descubierto entre el 16 y el 29 de febrero de 1950.",
"Fue el asteroide número 19 en ser descubierto entre el 1 y el 15 de abril de 1996.", 
"Fue el tercer asteroide en ser descubierto entre el 1 y el 15 de agosto de 1956. ", 
"Fue el asteroide número 114 en ser descubierto entre el 16 y el 31 de junio de 2004.",
"Fue el tercer asteroide en ser descubierto entre el 1 y el 15 de diciembre de 1941, aunque fue redescubierto posteriormente en 1962."];
var respuestas = [["1950 DA", "1950 AD", "1950 CA", "DA 1950"], 
["1996 GT", "GT 1996", "1996 GU", "1996 HU"], 
["1956 PC", "PD 1956", "56 PC", "1956 C"],
["2004 MN4", "2004 MN", "M4N 2004", "04 MN4"],
["1941 XC, 1962 NB", "1941 XC", "1941-1962 XC", "1962 XC"]];

function cambiar() {
  var al = Math.floor(Math.random() * nombres.length);
  var respuestas_posibles = respuestas[al];
  var tengo_la_respuesta = false;
  var posiciones = [0, 1, 2, 3];
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

  document.getElementById("ia").textContent = nombres[al];
  
  var txt_respuestas = "";
  for (i in respuestas_reordenadas) {
    txt_respuestas += '<input type="radio" name="cuestionario" value="' + i + '"><label>' + respuestas_reordenadas[i] + '</label>';
  }
  document.getElementById("respuestas").innerHTML = txt_respuestas;
}

function comprobar() {
  var respuesta = $("input[type=radio]:checked").val()
  if (respuesta == respuesta_correcta) {
    alert('Respuesta correcta.');
  } else {
    alert("Inténtalo de nuevo");
  }
}