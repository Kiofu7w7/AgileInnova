/* EJERCICO 1
Dadas las variables de tipo int con valores A = 5, B = 3, C = -12 
Indicar si cada una de las expresiones es verdadera o falsa.
a) A > 3                     b) A > C                    c) A < C
d) B < C                     e) B != C                   f) A == 3
g) A * B == 15               h) A * B == -30             i) C / B < A
j) C / B == -10              k) C / B == -4              l) A + B + C == 5
m) (A+B == 8) && (A-B == 2)  n) (A+B == 8) || (A-B == 6)
o) A > 3 && B > 3 && C < 3   p) A > 3 && B >= 3 && C < -3

a)V, b)V, c)F, d)F, e)V, f)F, g)V, h)F, i)V, j)F, k)V, l)F, m)V, n)V, o)F, p)V
*/

//EJERCICIO 2 Hacer un programa que convierta los grados centígrados (30 grados) a grados Fahrenheit, 
//la fórmula es la siguiente: (C*1.8) +32. Imprimir los resultados en una alerta.
valor=30.0
gradosF=(valor*1.8)+32
alert(gradosF)

//EJERCICIO 3 Pedir un número al usuario y escribirlo/imprimirlo sumándole 10. Imprimir los resultados por consola
valor2=Number(prompt("Ingrese un numero para sumarle 10"))
console.log(valor2+10)

//EJERCICIO 4 Realizar el mismo programa del Ejercicio #2, pero ahora se debe pedir el dato inicial (grados centígrados) al usuario (teclear el dato).
valor=Number(prompt("Ingrese el valor a volver en Fahrenheit"))
gradosF=(valor*1.8)+32
alert(gradosF)