//Criação de array alunos
const alunos = {
    nome: "RAFAEL FERREIRA",
    idade: 18,
    cursando: ["JAVA" , "AOS" , "BD1"],
    presença: ["2024-02-22", "2024-03-15" , "2024-03-20"],
    ra: "2208683"
}
// console.log(alunos)

//Criação de array alunos2 para erro
const alunos2 = {
    nome: "GABRIEL",
    idade: 13,
    cursando: ["BD2" , "C#" , "BD1"],
    presença: ["2024-03-20"],
    ra: "2208763"
}

//Criação da função validaCadastro onde mostrará se existe algum cadastro inválido
// função length traz a quantidade de caracteres
function validaCadastro(nome, idade, cursando, presença, ra){
    if(nome.length < 10){
        console.log("NOME INVÁLIDO");
    }
    else if(idade < 15){
        console.log("IDADE INVÁLIDA");
    }
    else if(cursando.length < 3){
        console.log("NUMERO DE CURSOS INVALIDO");
    }
    else if(presença.length < 2){
        console.log("POUCA PRESENÇA");
    }
    else if(ra.length != 7){
        console.log("RA INCORRETO");
    }
    else{
        console.log("Cadastro Válido");
    }
}

validaCadastro(alunos)
console.log(validaCadastro(alunos));
