//ESERCIZIO N°1
let v = 15
function valutation(v) {
    if (v > 18) {
        console.log("insufficente");
    }
    else if (18 >= v <= 21) {
        console.log("sufficente");
    } 
    else if (21 >= v <= 24) {
        console.log("buono");
    }
    else if (24 >= v <= 27) {
        console.log("distinto");
    }
    else if (27 >= v <= 29) {
        console.log("ottimo");
    }
    else { 
        console.log("eccellente");
    }
    return
}

valutation()

//ESERCIZIO N°2 OK
// qui come puoi vedere la i l'ho fatta cominciare da 1 volutamente perchè ogni volta vedere quello 0 all'inzio ogni test era un cazzotto nell'occhio, ma ho capito il senso di quest'esercizio.

/*let num = parseInt (prompt("inserisci un numero da moltiplicare"))

for (let i = 1; i < 11; i++) {
   console.log(num * i);
}*/