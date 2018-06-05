// todo
const btn = document.querySelector('#show-hint');
const hint = document.querySelector('.hint');
const tiles = document.querySelectorAll('td');

// tiles = [td, td, td, td, td]

btn.addEventListener('click', function(){
	hint.classList.toggle('active');
})

tiles.forEach((tile) => {
	tile.addEventListener('click', function(){
		// check if the empty tile is adjacent
		if (isMovable(tile)){
			move(tile);
		}
		isWinner();
	});
});

function isMovable(tile) {
	const tileRow = tile.parentNode.rowIndex;
	const tileColumn = tile.cellIndex;

	const emptyTile = document.querySelector('.empty');
	const emptyTileRow = emptyTile.parentNode.rowIndex;
	const emptyTileColumn = emptyTile.cellIndex;



	return (tileColumn === emptyTileColumn && tileRow === emptyTileRow + 1) ||
  (tileColumn === emptyTileColumn && tileRow === emptyTileRow - 1) ||
  (tileRow === emptyTileRow && tileColumn === emptyTileColumn + 1) ||
  (tileRow === emptyTileRow && tileColumn === emptyTileColumn - 1)
}

function move(tile){
	let number = tile.innerText;
	let emptyTile = document.querySelector('.empty');
	emptyTile.classList.remove('empty');
	emptyTile.innerHTML = number;
	tile.classList.add('empty');
	tile.innerText = "";
}

function isWinner() {
	const tilesOrder = Array.from(tiles).map(e => parseInt(e.innerHTML))
	if (tilesOrder.join() === "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,NaN") {
		alert("You win!")
	}
}