total=0
opc=Number(prompt("Si solo durmio ingrese '1', pero si solo estuvo en reposo ingrese '2'"))
if(opc == 1){
    minDor=Number(prompt("Ingrese la cantidad de minutos que durmio"))
    total=minDor*1.08
    alert("Usted consumio un total de " + total + " calorias estando dormido")
}else{
    minRepo=Number(prompt("Ingrese la cantidad de minutos que reposo"))
    total=minRepo*1.66
    alert("Usted consumio un total de " + total + " calorias estando en reposo")
}