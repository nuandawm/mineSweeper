var MineController = (function(){
	// Public methods
	var dig = function(cell,cells){
		cell.dig();
		if (cell.getSurrMines()==0)
			digAdjacentCells(cell,cells);
	};
	var digAdjacentCells = function(cell,cells){
		var adjacentCells = cell.getAdjacentCells(cells);
		for (var k in adjacentCells) {
			if (!adjacentCells[k].getUncovered())
				dig(adjacentCells[k],cells);
		}
	};

	return {
		dig: dig,
		digAdjacentCells: digAdjacentCells
	}
})();