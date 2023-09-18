//Hacer un algoritmo que calcule el sueldo de un empleado dados como datos de entrada: el nombre, horas trabajadas y el valor de la hora.

nombre=prompt("Ingrese su nombre")
horasT=Number(prompt("Ingrese las horas trabajadas"))
valorH=Number(prompt("Cuanto valor tiene cada hora de trabajo?"))
valorF=(horasT*valorH)
alert(`Su salario señor(a) ${nombre} es de: ${valorF}`)