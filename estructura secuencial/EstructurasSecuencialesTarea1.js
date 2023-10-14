cantH=Number(prompt("Ingrese la cantidad de hombres:"));
cantM=Number(prompt("Ingrese la cantidad de Mujeres:"));
total=cantH+cantM
porsentajeH=((cantH*100)/total)
porsentajeM=((cantM*100)/total)
alert("El porsentaje de hombre es de: " + porsentajeH + ", y de mujeres es de: " + porsentajeM)