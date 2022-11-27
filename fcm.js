function calcular2(){   
    
    edad = parseInt(document.getElementById("edad").value);
    sexo = document.getElementById("sexo").value;
    frecuencia = document.getElementById("frecuencia");
    lectura = document.getElementById("lectura2");
    if(edad!="" && sexo!=""){

      //}else if(sexo=="hombre"){
            var frecuenciares=220-edad;
            frecuencia.innerHTML=frecuenciares;
            
            /*if(frecuenciares<60){ lectura.innerHTML = "Zona de recuperación"; }
            else if(frecuenciares>=60 && frecuenciares<=70){ lectura.innerHTML = "Zona aeróbica"; }
            else if(frecuenciares>=70 && frecuenciares<=80){ lectura.innerHTML = "Zona anaeróbica"; }
            else if(frecuenciares>80){ lectura.innerHTML = "Línea roja"; }*/

        }else if(sexo=="mujer"){
            var frecuenciares=226-edad;
            frecuencia.innerHTML=frecuenciares;}
        else{
            alert("Debes ingresar edad y sexo.")
        }
};