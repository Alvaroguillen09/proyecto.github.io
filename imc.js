function calcular( ){
		
	kg = parseInt(document.getElementById("kg").value);
	m = parseInt(document.getElementById("m").value)/100;
	imc = document.getElementById("imc");
	lectura = document.getElementById("lectura");

    
		var imcres=kg/(m*m);
		imc.innerHTML=imcres.toFixed(2);
           
        if(imcres<16){ lectura.innerHTML = "<b>Infrapeso (delgadez severa)</b>,Infrapeso (delgadez moderada), Infrapeso (delgadez aceptable), Peso normal, Sobrepeso, Obeso (tipo 1), Obeso (tipo 2), Obeso (tipo 3)"; }
        else if(imcres>=16 && imcres<=16.99){ lectura.innerHTML = "Infrapeso (delgadez severa),<b>Infrapeso (delgadez moderada)</b>, Infrapeso (delgadez aceptable), Peso normal, Sobrepeso, Obeso (tipo 1), Obeso (tipo 2), Obeso (tipo 3)"; }
        else if(imcres>=17 && imcres<=18.49){ lectura.innerHTML = "Infrapeso (delgadez severa),Infrapeso (delgadez moderada), <b>Infrapeso (delgadez aceptable)</b>, Peso normal, Sobrepeso, Obeso (tipo 1), Obeso (tipo 2), Obeso (tipo 3)"; }
        else if(imcres>=18.5 && imcres<=24.9){ lectura.innerHTML = "Infrapeso (delgadez severa),Infrapeso (delgadez moderada), Infrapeso (delgadez aceptable), <b>Peso normal</b>, Sobrepeso, Obeso (tipo 1), Obeso (tipo 2), Obeso (tipo 3)"; }
        else if(imcres>=25 && imcres<=29.99){ lectura.innerHTML = "Infrapeso (delgadez severa),Infrapeso (delgadez moderada), Infrapeso (delgadez aceptable), Peso normal, <b>Sobrepeso</b>, Obeso (tipo 1), Obeso (tipo 2), Obeso (tipo 3)"; }
        else if(imcres>=30 && imcres<=34.99){ lectura.innerHTML = "Infrapeso (delgadez severa),Infrapeso (delgadez moderada), Infrapeso (delgadez aceptable), Peso normal, Sobrepeso, <b>Obeso (tipo 1)</b>, Obeso (tipo 2), Obeso (tipo 3)"; }
        else if(imcres>=35 && imcres<=40){ lectura.innerHTML = "Infrapeso (delgadez severa),Infrapeso (delgadez moderada), Infrapeso (delgadez aceptable), Peso normal, Sobrepeso, Obeso (tipo 1), <b>Obeso (tipo 2)</b>, Obeso (tipo 3)"; }
        else if(imcres>40){ lectura.innerHTML = "Infrapeso (delgadez severa),Infrapeso (delgadez moderada), Infrapeso (delgadez aceptable), Peso normal, Sobrepeso, Obeso (tipo 1), Obeso (tipo 2), <b>Obeso (tipo 3)</b>"; }

    else{
        alert("Debes ingresar peso y altura.")
    }
}

