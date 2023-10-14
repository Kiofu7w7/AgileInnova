total=0
menor=9999999
for (let i = 0; i < 40; i++) {
    num=Number(prompt("Ingrese la calificacion"))
    total+=num
    if (num < menor){
        menor = num
    }
}

promedio = total / 40
alert("El promedio del grupo es de " + promedio + " y la calificacion mas baja es de " + menor)