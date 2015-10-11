var BoardView = function(){

};
BoardView.prototype.addCells = function(cells) {
	var $board = $('#board');
	for (var i in cells) {
		for (var j in cells[i]) {
			var $cell = cells[i][j].getView().getElem();
			$board.append($cell);
			if (j==cells[i].length-1)
				$board.append('<br class="cf"/>');
		}
	}
};