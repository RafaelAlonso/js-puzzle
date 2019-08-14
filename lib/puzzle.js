//////////// Exemplo do professor
const td = document.querySelector('td');

console.log('Linha: ' + td.parentElement.rowIndex);
console.log('Coluna: ' + td.cellIndex);

const button = document.querySelector('#show-hint');

const toggleHint = (event) => {
  document.querySelector('.hint').classList.toggle('active');
}

button.addEventListener('click', toggleHint);


//////////// Código do livecode

// Selecionamos todos os Tiles (quadradinhos)
const tds = document.querySelectorAll('td');

// Função para checar se vencemos (versão dos alunos - NÃO FUNCIONA PERFEITAMENTE)
// const checkIfWon = () => {
//   // Mapeamos o valor de cada Tile (como Number)
//   const tdsValues = [];
//   tds.forEach((td) => tdsValues.push(Number(td.innerText)));

//   // Se o último é o 0
//   if (tdsValues[tdsValues.length - 1] === 0) {
//     // Removemos ele para não atrapalhar nosso sort
//     tdsValues.pop();

//     // Se todos os outros Tiles estiverem em ordem crescente
//     if (tdsValues === tdsValues.sort((a,b) => a - b)) {
//       // Mostramos um alerta de vitória!
//       alert(`You WINN!!!`);
//     }
//   }
// }

// Função para checar se vencemos (versão do professor)
const checkIfWon = () => {
  /*
    Nota aos alunos: após pesquisar um pouco, vi que a comparação de
    duas arrays não pode ser feita simplesmente com

      array1 === array2

    Essa comparação não checa se os valores estão na mesma ordem, mas
    se eles são EXATAMENTE A MESMA (ou seja, true se array1 === array1)

    Quando fizemos a comparação abaixo

      tdsValues === tdsValues.sort((a,b) => a - b)

    Ela sempre retornará verdadeiro, porque os dois lados da comparação
    são a mesma array (tdsValues), mesmo que a ordem seja diferente.

    Para testarmos se uma array está na mesma ordem que outra, o jeito
    mais simples que encontrei foi transformá-las (cada uma) numa string
    através de .join() e compará-las. Assim, nem precisamos fazer a lógica
    de retirar o '0' do final.

    Caso não gostem da ideia de escrever a array solução na mão (como abaixo),
    fica de exercício arranjar um jeito mais 'automático' de criar uma array
    em ordem crescente, com o 0 no final.

  */

  // Array solução
  const solution = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0];

  // Mapeamos o valor de cada Tile (como Number)
  const tdsValues = [];
  tds.forEach((td) => tdsValues.push(Number(td.innerText)));

  // Se todos os outros Tiles estiverem na ordem da solução
  if ( tdsValues.join() === solution.join() ) {
    // Mostramos um alerta de vitória!
    alert('You WINN!!!');
  }
}


// Para cada Tile
tds.forEach((td) => {
  // Adicionamos um EventListener para fazer algo quando o Tile é clicado
  td.addEventListener('click', (event) => {
    // Pegamos a Tile vazia e suas coordenadas na tabela
    const empty = document.querySelector('.empty');
    const emptyRow = empty.parentElement.rowIndex;
    const emptyCol = empty.cellIndex;

    // Pegamos as coordenadas da Tile que clicamos (event.target)
    const currentRow = event.target.parentElement.rowIndex;
    const currentCol = event.target.cellIndex;

    // Verificamos se a Tile clicada é vizinha da Tile vazia
    // (se estiverem na mesma linha e a uma coluna de distância
    //  ou estiverem na mesma coluna e a uma linha de distância)
    if (emptyRow === currentRow && ( emptyCol === currentCol - 1 || emptyCol === currentCol + 1 ) ||
        emptyCol === currentCol && ( emptyRow === currentRow - 1 || emptyRow === currentRow + 1 )){
      // Sendo vizinhas, remova a classe 'empty' da Tile vazia
      empty.classList.remove('empty');
      // Transforme a Tile clicada na Tile vazia (adicionando a classe 'empty')
      event.target.classList.add('empty');
      // Coloque o número da Tile clicada na (antiga) Tile vazia
      empty.innerText = event.target.innerText;
      // Remova o número da Tile clicada
      event.target.innerText = '';
    }

    // Depois de trocarmos as Tiles, verifique se o usuário ganhou o jogo
    checkIfWon();
  });
});
