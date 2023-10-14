segundos=0
minituos=0
horas=0

do{
    if(horas < 10){
        if(minituos < 10){
            if(segundos < 10){
                console.log("0"+horas+":"+"0"+minituos+":"+"0"+segundos)
            }else{
                console.log("0"+horas+":"+"0"+minituos+":"+segundos)
            }
        }else{
            if(segundos < 10){
                console.log("0"+horas+":"+minituos+":"+"0"+segundos)
            }else{
                console.log("0"+horas+":"+minituos+":"+segundos)
            }
        }
    }else{
        if(minituos < 10){
            if(segundos < 10){
                console.log(horas+":"+"0"+minituos+":"+"0"+segundos)
            }else{
                console.log(horas+":"+"0"+minituos+":"+segundos)
            }
        }else{
            if(segundos < 10){
                console.log(horas+":"+minituos+":"+"0"+segundos)
            }else{
                console.log(horas+":"+minituos+":"+segundos)
            }
        }
    }
    segundos++
    if (segundos >= 60){
        minituos++
        segundos=0
    }
    if (minituos >= 60){
        horas++
        minituos=0
    }
}while(horas < 24)