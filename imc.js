function calcular( ){
		
	kg = parseInt(document.getElementById("kg").value);
	m = parseInt(document.getElementById("m").value)/100;
	imc = document.getElementById("imc");
	lectura = document.getElementById("lectura");

    
		var imcres=kg/(m*m);
		imc.innerHTML=imcres;
           
        if(imcres<18.5){ lectura.innerHTML = "Peso inferior al normal"; }
        else if(imcres>=18.5 && imcres<=24.9){ lectura.innerHTML = "Peso normal"; }
        else if(imcres>=25 && imcres<=29.9){ lectura.innerHTML = "Peso superior al normal"; }
        else if(imcres>30){ lectura.innerHTML = "Obesidad"; }

    else{
        alert("Debes ingresar peso y altura.")
    }
}

