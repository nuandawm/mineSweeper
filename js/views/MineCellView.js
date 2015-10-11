var MineCellView = function(msModel){
	var model = msModel;
	var $elem = $('<div>').addClass('mineCell');
	// Adding to the dom element a method to get the corresponding view
	var that = this;
	$.extend($elem.get(0),
		{getView:function(){return that;}});

	this.getElem = function(){
		return $elem;
	};
	this.getModel = function(){
		return model;
	};
};
MineCellView.prototype.dig = function() {
	if (!this.getElem().hasClass('active'))
		this.getElem().addClass('active');
	if (this.getModel().getHasMine()) {
		alert('BOOM!'); // TODO Put a message somewhere
		location.reload();
	}
	else {
		if (this.getModel().getSurrMines()!=0)
			this.getElem().html(this.getModel().getSurrMines());
		else {
			// TODO Recursive method to cicle on neighbour cell with surrMines==0 and .dig them
		}
	}
};