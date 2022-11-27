function calcular2(){   
    edad = parseInt(document.getElementById("edad").value);
    sexo = document.getElementById("sexo").value;
    frecuencia = document.getElementById("frecuencia");
    lectura = document.getElementById("lectura");
    if(edad!="" && sexo!=""){
            var frecuenciares=220-edad;
            frecuencia.innerHTML=frecuenciares;
        }else if(sexo=="mujer"){
            var frecuenciares=226-edad;
            frecuencia.innerHTML=frecuenciares;
        }
    }else{
        alert("Debes ingresar edad y sexo.")
    }
};

/*function calcular2( ){
		
    edad = parseInt(document.getElementById("kg").value);
    sexo = parseInt(document.getElementById("m").value);
    imc = document.getElementById("imc");
    lectura = document.getElementById("lectura");

    if(kg!="" && m!=""){
        var imcres=kg/(m*m);
        imc.innerHTML=imcres;
       
        if(imcres<18.5){ lectura.innerHTML = "Peso inferior al normal"; }
        else if(imcres>=60 && imcres<=70){ lectura.innerHTML = "Zona de	recuperació "; }
        else if(imcres>=70 && imcres<=80){ lectura.innerHTML = "Zona aeróbica"; }
        else if(imcres>=70 && imcres<=80){ lectura.innerHTML = "Zona anaeróbica"; }
        else if(imcres>=90 && imcres<=100){ lectura.innerHTML = "Línea roja"; }
        

    }else{
        alert("Debes ingresar peso y altura.")
    }
};*/