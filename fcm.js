function calcular2(){   
    
    edad = parseInt(document.getElementById("edad").value);
    sexo = document.getElementById("sexo").value;
    frecuencia = document.getElementById("frecuencia");
    lectura = document.getElementById("lectura2");
    lectura2 = document.getElementById("lectura3");
    lectura3 = document.getElementById("lectura4");
    lectura4 = document.getElementById("lectura5");

        if(sexo=="hombre"){
            var frecuenciaress=220-edad;
            frecuencia.innerHTML=frecuenciaress;

            var porcentaje=0.6*frecuenciaress;
            var porcentaje2=0.7*frecuenciaress;
            var porcentaje3=0.8*frecuenciaress;
            var porcentaje4=0.9*frecuenciaress;

            
            lectura.innerHTML = porcentaje+" Zona recuperación"; 
            lectura2.innerHTML = porcentaje2+" Zona aeróbica"; 
            lectura3.innerHTML = porcentaje3+" Zona anaeróbica"; 
            lectura4.innerHTML = porcentaje4+" Línea roja"; 
        }
        else if(sexo=="mujer"){
            var frecuenciares=226-edad;
            frecuencia.innerHTML=frecuenciares;
        
            var porcentaje=0.6*frecuenciares;
            var porcentaje2=0.7*frecuenciares;
            var porcentaje3=0.8*frecuenciares;
            var porcentaje4=0.9*frecuenciares;

            
            lectura.innerHTML = porcentaje+" Zona recuperación"; 
            lectura2.innerHTML = porcentaje2+" Zona aeróbica"; 
            lectura3.innerHTML = porcentaje3+" Zona anaeróbica"; 
            lectura4.innerHTML = porcentaje4+" Línea roja"; 
        }else{
            alert("Debes ingresar edad y sexo.")
        }
    
};