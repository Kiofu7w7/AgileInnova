alert("EJERCICIO 1")
cantC=Number(prompt("Cada camisa cuenta 25.000 pesos, cuantas desea comprar?"))
total = 0
if(cantC >= 3){
    total=(cantC*25000)*0.80
    alert("El total de su compra fue de: " + total + " con un descuento del 20% por comprar 3 o mas")
}else{
    total=(cantC*25000)*0.90
    alert("El total de su compra fue de: " + total + " con un descuento del 10%")
}
alert("EJERCICIO 2")
empresa=0
banco=0
fabricante=0
total=0
monto=Number(prompt("Ingrese el monto para la compra de las refacciones"))
if (monto >= 500000){
    empresa=monto*0.55
    banco=monto*0.30
    fabricante=monto*0.15
    fabricante=fabricante+(fabricante*0.20)
    total=empresa+banco+fabricante
    alert("Devido a que el monto es superior a los 500000 se pagara un 55% a traves de la empresa lo cual seria "+empresa+", pide un prestamo al banco del 30% del monto total lo que se trascribe en " + banco + " y solicita un prestamo al fabricante del 15% lo que son " + fabricante)
}else{
    empresa=monto*0.70
    fabricante=monto*0.30
    fabricante=fabricante+(fabricante*0.20)
    total=empresa+fabricante
    alert("Devido a que el monto no es superior a los 500000 se pagara un 70% a traves de la empresa lo cual seria "+empresa+" y solicita un prestamo al fabricante del 30% lo que son " + fabricante)
}