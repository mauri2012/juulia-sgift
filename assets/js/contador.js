// Establece la fecha y hora de finalización
var fechaFinal = new Date("Dec 24, 2023 23:59:59").getTime();

// Actualiza el contador cada segundo
var contador = setInterval(function() {

    // Obtiene la fecha y hora actual
    var ahora = new Date().getTime();
    
    // Encuentra la diferencia entre ahora y la fecha de finalización
    var diferencia = fechaFinal - ahora;
    
    // Calcula el tiempo para días, horas, minutos y segundos
    var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    var horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
    
    // Muestra el resultado en el elemento con id="contador"
    document.getElementById("contador").innerHTML = dias + "d " + horas + "h " + minutos + "m " + segundos + "s ";
    
    // Si el contador llega a 0, detiene el contador
    if (diferencia < 0) {
        clearInterval(contador);
        document.getElementById("contador").innerHTML = "¡Tiempo finalizado!";
    }
}, 1000);