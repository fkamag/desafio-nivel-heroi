const input = require('readline-sync');

let heroi = '';
let nivel = '';

while (heroi != 'Sair') {
  heroi = input.question('Qual o nome do heroi ou para encerrar digite Sair? ');
  if (heroi == 'Sair') {
    break;
  }
  const valor = input.question('Qual o valor de XP? ');
  let xp = parseInt(valor);

  if (xp <= 1000) {
      nivel = 'Ferro';
  } else if (xp > 1000 && xp <= 2000) {
      nivel = 'Bronze';
  } else if (xp > 2000 && xp <= 5000) {
    nivel = 'Prata';
  } else if (xp > 5000 && xp <= 7000) {
    nivel = 'Ouro';
  } else if (xp > 7000 && xp <= 8000) {
    nivel = 'Platina';
  } else if (xp > 8000 && xp <= 9000) {
    nivel = 'Ascendente';
  } else {
    nivel = 'Radiante';
  }
  console.log(`O Herói de nome ${heroi} está no nível de ${nivel}`);
}

console.log("Até Breve ! ! !");