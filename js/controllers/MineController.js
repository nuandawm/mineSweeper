var MineController = (function(){
	// Public methods
	var dig = function(cell,cells,x,y,width,height){
		cell.dig();
		if (cell.getSurrMines()==0)
			digSurrZeros(cells,x,y,width,height);
	};

	var digSurrZeros = function(cells,x,y,width,height){
		// FIXME Don't know what's wrong
		for (var i in Constants.NEIGHBOUR_COORDS) {
			var coordX = x+Constants.NEIGHBOUR_COORDS[i].x;
			var coordY = y+Constants.NEIGHBOUR_COORDS[i].y;
			if ( coordX>=0 && coordX<width
				&& coordY>=0 && coordY<height) {
				if (cells[coordY][coordX].getSurrMines()==0)
					dig(cells[coordY][coordX], cells, coordX, coordY);
			}
		}
	};

	return {
		dig: dig,
		digSurrZeros: digSurrZeros
	}
})();