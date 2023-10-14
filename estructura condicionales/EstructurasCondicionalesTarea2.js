horaT=Number(prompt("Ingrese el total de horas trabajadas"))
total=0
if(horaT <= 40){
    total=horaT*16
    alert("El salario total es de " + total)
}else{
    extras=horaT-40
    horaT=horaT-extras
    total=(extras*20)+(horaT*16)
    alert("El salario total es de " + total)
}