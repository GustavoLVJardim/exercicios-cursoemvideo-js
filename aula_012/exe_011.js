let idade = 66;

if (idade >= 18 && idade < 65){
    console.log('voto obrigatório')
} else if (idade >= 16 || idade < 18){
    console.log('voto facultativo')
} else {
    console.log('voto negado')
}

// //////////////////////////////////////////////////////////////////////////

let hora = new Date();

console.log(`${hora.getHours()}:${hora.getMinutes()}:${hora.getSeconds()}`)

// //////////////////////////////////////////////////////////////////////////

