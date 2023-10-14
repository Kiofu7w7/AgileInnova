// Un estacionamiento requiere determinar el cobro que debe aplicar a las personas que lo utilizan. 
// Considere que el cobro es con base en las horas que lo disponen y que las fracciones de hora se toman como completas.
// Realizar el algoritmo que permita determinar el cobro.

horas=Number(prompt("Cuantas horas se quedo utilizando el estacionamiento?"))
cobro = horas*6000 //6.000 pesos colombianos por hora
alert(`El costo del servicio es de ${cobro} pesos`)