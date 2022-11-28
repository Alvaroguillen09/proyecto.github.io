function calcular3( ){
		
	anio = parseInt(document.getElementById("anio").value);
	lectura = document.getElementById("lectura10");
  
        if(anio==2017 || anio==2018 || anio==2019 ||anio==2020 ||anio==2021){ lectura.innerHTML = "<b>Mini</b>, Prebenjamín, Benjamín, Alevín, Infantil, Juveníl, Junior, Senior"; }
        else if(anio==2016 || anio==2015){ lectura.innerHTML = "Mini,<b>Prebenjamín</b>, Benjamín, Alevín, Infantil, Juveníl, Junior, Senior"; }
        else if(anio==2014 || anio==2013){ lectura.innerHTML = "Mini, Prebenjamín, <b>Benjamín</b>, Alevín, Infantil, Juveníl, Junior, Senior"; }
        else if(anio==2012 || anio==2011){ lectura.innerHTML = "Mini, Prebenjamín, Benjamín, <b>Alevín</b>, Infantil, Juveníl, Junior, Senior"; }
        else if(anio==2010 || anio==2009){ lectura.innerHTML = "Mini, Prebenjamín, Benjamín, Alevín, <b>Infantil</b>, Juveníl, Junior, Senior"; }
        else if(anio==2008 || anio==2007){ lectura.innerHTML = "Mini, Prebenjamín, Benjamín, Alevín, Infantil, <b>Juveníl</b>, Junior, Senior"; }
        else if(anio==2006 || anio==2005 || anio==2004){ lectura.innerHTML = "Prebenjamín, Benjamín, Alevín, Infantil, Juveníl, <b>Junior</b>, Senior"; }
        else if(anio<=2003){ lectura.innerHTML = "Mini, Prebenjamín, Benjamín, Alevín, Infantil, Juveníl, Junior, <b>Senior</b>"; }

    else{
        alert("debes ingresar año de nacimiento.")
    
    }
}
