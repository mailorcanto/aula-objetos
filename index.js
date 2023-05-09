//OBJETOS

/*
//Exercício 1 - ● Crie um objeto que represente um filme. Ele deve ter dados da direção, o nome, o ano de lançamento, uma lista com o elenco e uma 
//propriedade que diga se você já viu ou não.
//● Acesse e imprima no console cada uma das propriedades: metade usando notação do ponto e a outra metade com notação de colchetes. 

let pearl = {
    nome: 'Pearl',
    ano: '2022',
    elenco: atores = ['Mia Goth', 'David Corenswet', 'Tandi Wright', 'Emma Jenkins-Purro'],
    diretor: 'Ti West',
    assisti: 'Sim'
 }

 console.log('Nome do filme:',pearl.nome);
 console.log('Ano de lançamento:',pearl.ano);
 console.log('Elenco:',pearl['elenco']);
 console.log('Diretor:',pearl['diretor']);
console.log('Assisti?',pearl['assisti']);
*/

/*
//Exercício 2 - ● Crie um objeto que represente uma pessoa. Essa pessoa precisa ter nome, idade, gênero musical preferido.
//● Acesse e imprima no console as propriedades desse objeto, seguindo o modelo abaixo:
//"O nome da pessoa é ___, ela tem ___ anos e gosta muito de___."

const end1 = {
    rua: 'Rua 01',
    bairro: 'Não informado',
    cidade: 'São Leopoldo',
    estado: 'RS'
}

const end2 = {
    rua: 'Rua 01',
    bairro: 'Não informado',
    cidade: 'Novo Hamburgo',
    estado: 'RS'
}

const pessoa = {
    nome: 'João',
    idade: '50',
    generoMusical: 'Bossa Nova',
    endereco: [end1, end2]
}

console.log(`O nome da pessoa é ${pessoa.nome}, ele tem ${pessoa.idade} anos e gosta muito de ${pessoa.generoMusical}. Mora na cidade de: ${pessoa.endereco[0].cidade}`)
*/


//Exercício 3 - ● Adicione ao objeto do exercício 1 uma lista com os nomes dos personagens do filme.
//● Acesse e imprima no console cada pessoa do elenco junto com seu respectivo personagem
//● Altere a primeira pessoa do elenco por "Xuxa".
//● Imprima no console todas as propriedades do objeto.

/*
let pearl = {
    nome: 'Pearl',
    ano: '2022',
    elenco: ['Mia Goth', 'David Corenswet', 'Tandi Wright', 'Emma Jenkins-Purro'],
    diretor: 'Ti West',
    assisti: 'Sim'
 }

pearl.personagens = ['Pearl', 'Projectionist', 'Ruth', 'Mitsy'];
console.log('Atriz/Ator:',pearl.elenco[0],'- Personagem:',pearl.personagens[0]);
console.log('Atriz/Ator:',pearl.elenco[1],'- Personagem:',pearl.personagens[1]);
console.log('Atriz/Ator:',pearl.elenco[2],'- Personagem:',pearl.personagens[2]);
console.log('Atriz/Ator:',pearl.elenco[3],'- Personagem:',pearl.personagens[3]);
pearl.elenco[0] = 'Satan';
pearl.elenco[0] = 'Mia Goth';
console.log(pearl);
*/

/*
//Exercício 4 - ● Crie uma função que receba um objeto de pessoa (Exercício 2) e crie um novo objeto mantendo as propriedades originais e 
//acrescentando: ○ Uma propriedade com a lista de suas comidas preferidas;
//○ Uma propriedade que seja um objeto, com nome e idade, para representar o melhor amigo da pessoa.
//● Ainda na função, imprima no console as propriedades desse objeto seguindo o modelo abaixo:
//"O nome da pessoa é ___ e suas comidas preferidas são ___, ___ e ___. Seu melhor amigo se chama ___ e tem ___ anos"


let pessoa = {
    nome: prompt('Digite seu nome:'),
    idade: Number(prompt('Digite sua idade')),
    generoMusical: prompt('Digite seu gênero musical favorito:')
}

const copiaPessoa = {
    ...pessoa,    
}

copiaPessoa.comidas = ["Pizza", "X-Bacon", "Churrasco"];
copiaPessoa.melhorAmigo = {
    nome: 'Dayane',
    idade: '33'
}

console.log('O nome da pessoa é:',pessoa.nome,'e suas comidas favoritas são:',copiaPessoa.comidas[0],',',copiaPessoa.comidas[1],'e '+copiaPessoa.comidas[2]+'. Sua melhor amiga se chama',copiaPessoa.melhorAmigo.nome,'e tem',copiaPessoa.melhorAmigo.idade,'anos.')
*/


//EXERCÍCIOS


//Exercícios de interpretação de código

/*
//1.Leia o código abaixo:

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0]) //Imprime o primeiro índice [0] do array elenco
console.log(filme.elenco[filme.elenco.length -1]) //Imprime o último índice do array elenco através do tamanho(length) do array, que é 3. -1 serve para igualar o tamanho do array ao número de índices, que é de 0 a 2 (e não de 1 a 3)
console.log(filme.transmissoesHoje[2]) //Imprime o terceiro índice[2] do array transmissoesHoje, que é uma propriedade que contém duas chaves e dois valores

//a) O que vai ser impresso no console?
*/

/*
//2. Leia o código abaixo:

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro) //vai imprimir o objeto cachorro com todas as suas propriedades
console.log(gato) //vai imprimir o objeto gato com todas as suas propriedades, que foram copiadas do objeto 'cachorro', porém com um nome diferente na propriedade nome
console.log(tartaruga) //vai imprimir o objeto tartaruga com todas as suas propriedades, que foram copiadas do objeto 'gato', porém com a troca da letra a por o na propriedade nome

//a) O que vai ser impresso no console? = respostas acima

//b) O que faz a sintaxe dos três pontos antes do nome de um objeto? = Faz uma cópia daquele objeto
*/


//Exercícios de escrita de código

/*
//1. Resolva os passos a seguir:
//a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos).
//Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 

//Exemplo de Saída: "Eu sou Vitor, mas pode me chamar de: Vitinho, Vitão ou Vit"

//b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. 
//Depois, chame a função feita no item anterior passando como argumento o novo objeto

const pessoa = {
    nome: "Vitor Hugo", 
    apelidos: ["Vitinho", "Vitão", "Vit"]
 }
 
function entradaObjeto (nome, apelido1, apelido2, apelido3) {
   
    const mensagem = `Eu sou ${nome}, mas pode me chamar de: ${apelido1}, ${apelido2} ou ${apelido3}.`
    return console.log(mensagem);
    
}

entradaObjeto (pessoa.nome, pessoa.apelidos[0],pessoa.apelidos[1],pessoa.apelidos[2]);

const novosApelidos = {
    ...pessoa,
    apelidos: ["Vitonho", "Vitiligo", "Vinicius"] 
}

entradaObjeto (novosApelidos.nome, novosApelidos.apelidos[0],novosApelidos.apelidos[1],novosApelidos.apelidos[2]);
*/

/*
//2. Resolva os passos a seguir: 
//a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
//b) Escreva uma função que receba um objeto de cada vez e retorne um array com as seguintes informações:
//1. O valor de `nome`
//2. O numero de caracteres do valor `nome`
//3. O valor de `idade`
//4. O valor de `profissão`
//5. O numero de caracteres do valor `profissão`

const pessoa1 = {
    nome: 'José',
    idade: 50,
    profissao: 'carpinteiro'
}

const pessoa2 = {
    nome: 'Maria',
    idade: 46,
    profissao: 'arquiteta'
}

function informacoes (nome, idade, profissao) {
    var mensagem = `O nome da pessoa é ${nome}, este nome tem ${nome.length} caracteres. A idade da pessoa é de ${idade} anos, exerce a profissão de ${profissao}, o numero de caracteres da palavra ${profissao} é de ${profissao.length}.`;
    return console.log(mensagem);
}

informacoes(pessoa1.nome, pessoa1.idade, pessoa1.profissao);
informacoes(pessoa2.nome, pessoa2.idade, pessoa2.profissao);
*/

/*
//3. Resolva os passos a seguir:
//a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
//b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)
//c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados. 
//d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.**

let carrinho = [];

const fruta1 = {
    nome: 'Laranja',
    disponibilidade: true
}

const fruta2 = {
    nome: 'Maçã',
    disponibilidade: true
}

const fruta3 = {
    nome: 'Manga',
    disponibilidade: true
}

function frutas(fruta){
    return carrinho.push(fruta); 
}

frutas(fruta1); frutas(fruta2); frutas(fruta3);

console.log(carrinho);
*/


//DESAFIOS

/*
//1. Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades. 
//Depois de imprimir o novo objeto, imprima também o tipo dele para garantir que é um objeto.

function pessoa (nome, idade, profissao){
   
    let person = {
        nome: prompt('Digite seu nome:'),
        idade: Number(prompt('Digite sua idade:')),
        profissao: prompt('Digite sua profissão:')
    }
    return console.log(typeof person, person); //typeof person para retornar o tipo da variável

}

pessoa();
console.log(typeof pessoa);
*/

/*
//2. Crie uma função que receba dois objetos que representam filmes. Eles devem ter as propriedades: ano de lançamento e nome. 
//A função deve retornar uma mensagem no seguinte modelo:
//O primeiro filme foi lançado antes do segundo? false
//O primeiro filme foi lançado no mesmo ano do segundo? true

function filmes (ano1, nome1, ano2, nome2){
    let filme1 = {
        ano1: Number(prompt('Informe ano de lançamento do primeiro filme')),
        nome1: prompt('Informe nome do primeiro filme')
    }
    console.log(filme1);
    let filme2 = {
        ano2: Number(prompt('Informe ano de lançamento do segundo filme')),
        nome2: prompt('Informe nome do segundo filme')
    }
    console.log(filme2);
    mensagem1 = console.log('O primeiro filme foi lançado antes do segundo?',filme1.ano1 < filme2.ano2);
    mensagem2 = console.log('O primeiro filme foi lançado no mesmo ano do segundo?',filme1.ano1 == filme2.ano2);
    return mensagem1, mensagem2;
}

filmes();
*/

/*
//3. Crie uma função a mais pro exercício 3 de escrita de código. Essa função vai auxiliar o controle de estoque do sacolão: 
//ela deve receber por parâmetro uma das frutas e retornar esse mesmo objeto com a propriedade disponibilidade com o valor invertido. 

let carrinho = [];

const fruta1 = {
    nome: 'Laranja',
    disponibilidade: true
}

const fruta2 = {
    nome: 'Maçã',
    disponibilidade: true
}

const fruta3 = {
    nome: 'Manga',
    disponibilidade: true
}

function frutas(fruta){
    return carrinho.push(fruta); 
}

function disponibilidades (fruta){
    return fruta.disponibilidade = !fruta.disponibilidade; //retornar um valor para fruta.disponibilidade DIFERENTE do valor da variável (todas true)
}

disponibilidades(fruta1); disponibilidades(fruta2); disponibilidades(fruta3);
frutas(fruta1); frutas(fruta2); frutas(fruta3);

console.log(carrinho);
*/





