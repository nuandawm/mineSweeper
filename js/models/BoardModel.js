var BoardModel = function(width,height){
	var view = new BoardView();
	var cells = [];
	for (var i=0; i<height; i++) {
		cells.push([]);
		for (var j=0; j<width; j++) {
			cells[i].push(new MineCellModel(j,i));
		}
	}
	view.addCells(cells);

	this.getCells = function(){
		return cells;
	};
};