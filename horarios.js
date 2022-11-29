function horarioManana() {
    lectura = document.getElementById("tabla");
    let hola=" ";
    hola = "<table border='1'>";
    hola += "<tr><th>HORA</th><th>LUNES</th><th>MARTES</th><th>MIERCOLES</th><th>JUEVES</th><th>VIERNES</th></tr>";
    for (let i = 9; i < 15; i += 2) {
        hola += "<tr>";
        hola += "<th>" + i + ":00 - " + (i + 2) + ":00</th>";
        for (let j = 0; j < 5; j++) {
            hola += "<td></td>";
        }
        hola += "</tr>";
    }
    hola += "</table>";
    lectura.innerHTML = hola;
}
 function horarioTarde() {
    lectura = document.getElementById("tabla");
    let hola=" ";
    hola = "<table border='1'>";
    hola += "<tr><th>HORA</th><th>LUNES</th><th>MARTES</th><th>MIERCOLES</th><th>JUEVES</th><th>VIERNES</th><th>SABADO</th><th>DOMINGO</th></tr>";
    for (let i = 16; i < 21; i += 1) {
        hola += "<tr>";
        hola += "<th>" + i + ":00 - " + (i + 1) + ":00</th>";
        for (let j = 0; j < 7; j++) {
            hola += "<td></td>";
        }
        hola += "</tr>";
    }
    hola += "</table>";
    lectura.innerHTML = hola;
}

 


    



