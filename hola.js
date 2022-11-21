/*programa	que	solicite	al	usuario	sus	centı́metros	y	el	peso	en	kg	y	
devuelva	el	IGndice	de	Masa	Corporal	escrito	en	la	pantalla*/

var	peso	=	parseFloat(prompt("Introduzca	su	peso	en	kg"));
var	altura	=	parseFloat(prompt("Introduzca	su	altura	en	cm"));
var	IMC	=	peso	/	Math.pow(altura/100,	2);
alert("Su	IMC	es	"	+	IMC);

/*Además	de	mostrar	el	resultado, mostrará	la	siguiente	escala	y	marcará	de	alguna	
forma*/

if	(IMC	<	16)	{
alert("Delgadez	Severa");
}
else	if	(IMC	<	17)	{
alert("Delgadez	Modera");
}
else	if	(IMC	<	18.5)	{
alert("Delgadez	Aceptable");
}
else	if	(IMC	<	25)	{
alert("Peso	Normal");
}
else	if	(IMC	<	30)	{
alert("Sobrepeso");
}
else	if	(IMC	<	35)	{
alert("Obesidad	Modera");
}
else	if	(IMC	<	40)	{
alert("Obesidad	Severa");
}
else	{
alert("Obesidad	Morbida");
}

/*Además,	comprobará	que	no	se	meta	ningú n	valor	incorrecto	de	peso	ni	altura,	y	
en	caso	de	que	ası́	sea,	volverá	a	solicitar	los	datos.*/

while	(isNaN(peso)	||	peso	<=	0)	{
alert("El	peso	no	es	correcto");
peso	=	parseFloat(prompt("Introduzca	su	peso	en	kg"));
}
while	(isNaN(altura)	||	altura	<=	0)	{
alert("La	altura	no	es	correcta");
altura	=	parseFloat(prompt("Introduzca	su	altura	en	cm"));
}

/*Crea	un	programa	que	solicite	al	usuario	su	edad	y	su	sexo	y	devuelva	la	
frecuencia	cardiaca	máxima	por	pantalla*/

var	edad	=	parseInt(prompt("Introduzca	su	edad"));
var	sexo	=	prompt("Introduzca	su	sexo");
var	frecuencia	=	0;
if	(sexo	==	"hombre")	{
frecuencia	=	220	-	edad;
}
else	{
frecuencia	=	226	-	edad;
}
alert("Su	frecuencia	cardiaca	máxima	es	"	+	frecuencia);



                