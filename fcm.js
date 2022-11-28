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

        var porcentaje=(0.6*frecuenciaress).toFixed(2);
        var porcentaje2=(0.7*frecuenciaress).toFixed(2);
        var porcentaje3=(0.8*frecuenciaress).toFixed(2);
        var porcentaje4=(0.9*frecuenciaress).toFixed(2);


        lectura.innerHTML = porcentaje+"-"+porcentaje2+" Zona recuperación"; 
        lectura2.innerHTML = porcentaje2+"-"+porcentaje3+" Zona aeróbica"; 
        lectura3.innerHTML = porcentaje3+"-"+porcentaje4+" Zona anaeróbica"; 
        lectura4.innerHTML = porcentaje4+" Línea roja";
    }
    else if(sexo=="mujer"){
        var frecuenciares=226-edad;
        frecuencia.innerHTML=frecuenciares;

        var porcentaje=(0.6*frecuenciares).toFixed(2);
        var porcentaje2=(0.7*frecuenciares).toFixed(2);
        var porcentaje3=(0.8*frecuenciares).toFixed(2);
        var porcentaje4=(0.9*frecuenciares).toFixed(2);


        lectura.innerHTML = porcentaje+"-"+porcentaje2+" Zona recuperación"; 
        lectura2.innerHTML = porcentaje2+"-"+porcentaje3+" Zona aeróbica"; 
        lectura3.innerHTML = porcentaje3+"-"+porcentaje4+" Zona anaeróbica"; 
        lectura4.innerHTML = porcentaje4+" Línea roja";
    }else{
        alert("Debes ingresar edad y sexo.")
    }

};