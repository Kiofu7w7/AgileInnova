p1=Number(prompt("Ingrese la calificacion del primer parcial"))
p2=Number(prompt("Ingrese la calificacion del segundo parcial"))
p3=Number(prompt("Ingrese la calificacion del tercer parcial"))
promedioP=(((p1+p2+p3)/3)*0.55)
n2=Number(prompt("Ingrese la calificacion del examen final"))
n2=n2*0.30
n3=Number(prompt("Ingrese la calificacion del trabajo final"))
n3=n3*0.15
total=promedioP+n2+n3
alert("La nota definitiva es de: " + total)

