var repeticiones = parseInt(prompt("¿Cuántas veces quieres repetir el juego?"));
contador = 1;
var partidasganadas = 0;
var partidasperdidas = 0;

while (contador <= repeticiones) {
    
    var eleccion = prompt("Indica tu jugada: Piedra, Papel o Tijera");
    alert("Tu elección fue " + eleccion )
    var maquina = Math.floor(Math.random()*3) +1;
    if(maquina == 1) {
        alert("Tu oponente eligió Piedra")
    }
    if (maquina == 2){
        alert("Tu oponente eligió Papel")
    } 
    if (maquina == 3){
        alert("Tu oponente eligió Tijera")
    } 

    if(eleccion == "Piedra" || eleccion == "PIEDRA" || eleccion == "piedra") {
        eleccion = 1;
    } 
    
    else if(eleccion == "Papel"|| eleccion == "PAPEL"|| eleccion == "papel") {
        eleccion = 2;
    } 

    else if(eleccion == "Tijera"|| eleccion == "TIJERA"|| eleccion == "tijera") {
        eleccion = 3;
    } 

    else {
        alert("Por favor elige entre las siguientes opciones: piedra, papel o tijera")
    }

    if (eleccion == maquina){
        alert("Has empatado la partida Nº " + contador)
    }

    else if ((eleccion == 1 && maquina == 3) || (eleccion == 2 && maquina == 1) || (eleccion == 3 && maquina == 2) ){
        alert("Has ganado la partida Nº " + contador, "ya que tu oponente eligió" + maquina)
        partidasganadas += 1;
    }

    else if ((eleccion == 1 && maquina == 2) || (eleccion == 2 && maquina == 3) || (eleccion == 3 && maquina == 1) ) {
        alert("Has perdido la partida Nº " + contador, "ya que tu oponente eligió" + maquina)
        partidasperdidas += 1;
    }

    else  {
        alert("Partida inconclusa")
    }
    contador++;
}

document.write("Has ganado " + partidasganadas + " partida(s), y perdido " + partidasperdidas + " de ellas, de un total de " + repeticiones + " repeticione(s) <br>")
if (partidasganadas > partidasperdidas){
    document.write("Por lo tanto, eres el ganador, !Felicidades!")
}
else if (partidasganadas == partidasperdidas){
    document.write("Por lo tanto, has empatado el juego")
}

else{
    document.write("Por lo tanto, perdiste el juego, vuelve a intentarlo")
}
