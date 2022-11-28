function calcular2(){   
    
    edad = parseInt(document.getElementById("edad").value);
    sexo = document.getElementById("sexo").value;
    frecuencia = document.getElementById("frecuencia");
    lectura = document.getElementById("lectura2");
    if(edad!="" && sexo!=""){

        }else if(sexo=="hombre"){
            var frecuenciares=220-edad;
            frecuencia.innerHTML=frecuenciares;

            var porcentaje=0.6*frecuenciares;
            var porcentaje2=0.7*frecuenciares;
            var porcentaje3=0.8*frecuenciares;
            var porcentaje4=0.9*frecuenciares;

            
            lectura.innerHTML = porcentaje+"Zona recuperación"; 
            (frecuenciares>=porcentaje2 && frecuenciares<=porcentaje3);lectura.innerHTML = "Zona aeróbica"; 
            (frecuenciares>=porcentaje3 && frecuenciares<=porcentaje4);lectura.innerHTML = "Zona anaeróbica"; 
            (frecuenciares>porcentaje4);lectura.innerHTML = "Línea roja"; 

        }else if(sexo=="mujer"){
            var frecuenciares=226-edad;
            frecuencia.innerHTML=frecuenciares;}
           
        else{
            alert("Debes ingresar edad y sexo.")
        }
};