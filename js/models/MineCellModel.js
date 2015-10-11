var MineCellModel = function(xInt,yInt){
	var surrMines = 0;
	var uncovered = false;
	var hasMine = false;
	var x = xInt;
	var y = yInt;
	var view = new MineCellView(this);

	this.getView = function(){
		return view;
	};
	this.getHasMine = function(){
		return hasMine;
	};
	this.setHasMine = function(hasMineBool){
		hasMine = hasMineBool;
	};
	this.getUncovered = function(){
		return uncovered;
	};
	this.setUncovered = function(uncoveredBool){
		uncovered = uncoveredBool;
	};
	this.getSurrMines = function(){
		return surrMines;
	};
	this.setSurrMines = function(surrMinesInt){
		surrMines = surrMinesInt;
	};
	this.getX = function(){
		return x;
	};
	this.getY = function(){
		return y;
	};
};
MineCellModel.prototype.dig = function() {
	this.setUncovered(true);
	if (!this.getHasMine())
		this.getView().dig();
	else
		this.boom();
};
MineCellModel.prototype.incrSurrMines = function() {
	this.setSurrMines(this.getSurrMines()+1);
};
MineCellModel.prototype.boom = function() {
	if (this.getHasMine())
		this.getView().boom();
};
MineCellModel.prototype.getAdjacentCells = function(cells) {
	var adjacentCells = [];
	for (var k in Constants.NEIGHBOUR_COORDS) {
		var coordX = this.getX()+Constants.NEIGHBOUR_COORDS[k].x;
		var coordY = this.getY()+Constants.NEIGHBOUR_COORDS[k].y;
		if ( coordX>=0 && coordX<cells[0].length
			&& coordY>=0 && coordY<cells.length) {
			adjacentCells.push(cells[coordY][coordX]);
		}
	}
	return adjacentCells;
};