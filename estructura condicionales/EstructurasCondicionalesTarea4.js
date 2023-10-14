opc=Number(prompt("Si desea ver el primer articulo ingrese '1', si desea ver el segundo ingrese '2"))
nombre=""
clave=0
precioO=0
precioD=0
if(opc == 1){
    nombre="Cafe"
    clave=1
    precioO=5000
    precioD=0
}else{
    nombre="Mandarina"
    clave=2
    precioO=2000
    precioD=0
}

if(clave == 1){
    precioD = precioO * 0.10
}else if (clave == 2){
    precioD = precioO * 0.20
}

alert("El producto se llama " + nombre + " con numero clave " + clave + " con un precio original de " + precioO + " y el precio con descuento es " + precioD)