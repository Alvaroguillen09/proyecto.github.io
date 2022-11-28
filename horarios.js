//Crea una tabla de horario de mañana que muestre las horas de dos en dos con el formato 9:00-11:00, desde las 9 hasta las 15:00 y los dı́as del lunes al viernes.Habrá otra tabla de horario de tarde que muestre las horas de una en una con el formato 16:00-17:00, desde las 16 hasta las 21:00 y los dı́as del lunes al domingo.Tanto las horas como los dı́as (es decir, la primera columna y la primera Cila) tendrán etiqueta th. El resto tendrán etiqueta td.

function horarioManana() {
    var tabla = document.createElement("table");
    var cabecera = document.createElement("tr");
    var celda = document.createElement("th");
    var texto = document.createTextNode("Horario");
    celda.appendChild(texto);
    cabecera.appendChild(celda);
    var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
    for (var i = 0; i < dias.length; i++) {
        var celda = document.createElement("th");
        var texto = document.createTextNode(dias[i]);
        celda.appendChild(texto);
        cabecera.appendChild(celda);
    }
    tabla.appendChild(cabecera);
    for (var i = 9; i < 15; i += 2) {
        var fila = document.createElement("tr");
        var celda = document.createElement("th");
        var texto = document.createTextNode(i + ":00-" + (i + 2) + ":00");
        celda.appendChild(texto);
        fila.appendChild(celda);
        for (var j = 0; j < dias.length; j++) {
            var celda = document.createElement("td");
            var texto = document.createTextNode(" ");
            celda.appendChild(texto);
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
    document.body.appendChild(tabla);
}

function horarioTarde() {
    var tabla = document.createElement("table");
    var cabecera = document.createElement("tr");
    var celda = document.createElement("th");
    var texto = document.createTextNode("Horario");
    celda.appendChild(texto);
    cabecera.appendChild(celda);
    var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    for (var i = 0; i < dias.length; i++) {
        var celda = document.createElement("th");
        var texto = document.createTextNode(dias[i]);
        celda.appendChild(texto);
        cabecera.appendChild(celda);
    }
    tabla.appendChild(cabecera);
    for (var i = 16; i < 22; i++) {
        var fila = document.createElement("tr");
        var celda = document.createElement("th");
        var texto = document.createTextNode(i + ":00-" + (i + 1) + ":00");
        celda.appendChild(texto);
        fila.appendChild(celda);
        for (var j = 0; j < dias.length; j++) {
            var celda = document.createElement("td");
            var texto = document.createTextNode(" ");
            celda.appendChild(texto);
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
    document.body.appendChild(tabla);
}
