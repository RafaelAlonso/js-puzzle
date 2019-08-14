const td = document.querySelector('td');

console.log('Linha: ' + td.parentElement.rowIndex);
console.log('Coluna: ' + td.cellIndex);

const button = document.querySelector('#show-hint');

const toggleHint = (event) => {
  document.querySelector('.hint').classList.toggle('active');
}

button.addEventListener('click', toggleHint);
// quando click eventList no <td>,
const tds = document.querySelectorAll('td');

const checkIfWon = () => {
  const tdsValues = [];
  tds.forEach((td) => tdsValues.push(Number(td.innerText)));
  if (tdsValues[tdsValues.length - 1] === 0) {
    tdsValues.pop();
    if (tdsValues === tdsValues.sort((a,b) => a - b)) {
      alert(`You WINN!!!`);
    }
  }
}

tds.forEach((td) => {
  td.addEventListener('click', (event) => {
// procurar o espaço vacio (cordenadas)
    const empty = document.querySelector('.empty');
// verificar se a tile clicada e vizinha da vacia
    const emptyRow = empty.parentElement.rowIndex;
    const emptyCol = empty.cellIndex;
    const currentRow = event.target.parentElement.rowIndex;
    const currentCol = event.target.cellIndex;
// trocar as titles,
    if (emptyRow === currentRow && (
        emptyCol === currentCol - 1 ||
        emptyCol === currentCol + 1 ) ||
        emptyCol === currentCol && (
        emptyRow === currentRow - 1 ||
        emptyRow === currentRow + 1 )
       ) {
      empty.classList.remove('empty');
      event.target.classList.add('empty');
      empty.innerText = event.target.innerText;
      event.target.innerText = '';
    }

  });
});

// colocar o texto (td = sem texto)(tv = com texto)



















