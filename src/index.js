const input = require('readline-sync');

let heroi = '';

while (heroi != 'Sair') {
    heroi = input.question('Qual o nome do heroi ou para encerrar digite Sair? ');
    if (heroi == 'Sair') {
      break;
    }
    const valor = input.question('Qual o valor de XP? ');

    console.log(`O Herói de nome ${heroi} está no nível de ${valor}`);
}

console.log("Até Breve ! ! !");