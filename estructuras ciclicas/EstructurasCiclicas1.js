alert("Ejercicio 1")
for (let i = 0; i < 10; i++) {
    num=Number(prompt("Ingrese un numero puede ser positivo o negativo"))
    if (num >= 0){
        alert("El numero que ingreso es positivo y es: " + num)
    }
}
alert("Ejercicio 2")
numero=Number(prompt("Que numero desea saber la tabla de multiplicar?"))
for (let i = 0; i < 11; i++) {
    multi=numero*i
    alert(numero + "*" + i + "=" + multi)
} 