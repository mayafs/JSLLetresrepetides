//Fase1
var name = ["M","A","Y","A"];
for ( i = 0; i <= name.length-1; i++){
    console.log(name[i]);
    "</br>"
}
//Fase2
var name2 = ["M","4","Y","A"];
console.log("partimos del nombre M4YA");
var vocal = /[aeiouAEIOUáéíóú]/;
var number = /[0-9]/;
for ( i = 0; i <= name2.length-1; i++){
    if( vocal.test(name2[i])){
        console.log("He trobat la vocal "+ name2[i]);
    }else if (number.test(name2[i])){
        console.log("Els noms de les persones no contenten números");
    }else{
        console.log("He trobat la consonant "  + name2[i]);
    }
}
//FASE3

    var name2 = ["A","A","M","Y"];
    var contador = new Map();
    for (i = 0; i < name2.length; i++) {
        var letra = name2[i];
        if (contador.has(letra)) {
            valor = contador.get(letra);
            contador.set(letra, valor + 1);
        }
        else {
            contador.set(letra, 1);
        }
    }

console.log(contador);

//FASE4
var name3 = ["M","A","Y","A"," "];
var surname = ["F","E","R","N","A","N","D","E","Z"];
var fullname = [];
fullname = [console.log(name3.concat(surname))];