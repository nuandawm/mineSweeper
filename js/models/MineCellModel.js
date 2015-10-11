var MineCellModel = function(){
	var surrMines = 0;
	var uncovered = false;
	var hasMine = false;
	var view = new MineCellView(this);

	this.getView = function(){
		return view;
	};
	this.setHasMine = function(hasMineBool){
		hasMine = hasMineBool;
	};
	this.getHasMine = function(){
		return hasMine;
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
};
MineCellModel.prototype.dig = function() {
	this.setUncovered(true);
	this.getView().dig();
};
MineCellModel.prototype.incrSurrMines = function() {
	this.setSurrMines(this.getSurrMines()+1);
};
MineCellModel.prototype.boom = function() {
	if (this.getHasMine())
		this.getView().boom();
};