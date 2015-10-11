var MainController = (function(){
	// Private fields
	var board = null;
	var width = 0;
	var height = 0;

	// Private methods
	var placeMines = function(){
		var minesNum = Math.floor((width*height)*Constants.MINE_PERCENTAGE/100);
		var cells = board.getCells();
		for (var i=0; i<minesNum; i++) {
			var x = Math.floor(Math.random()*width);
			var y = Math.floor(Math.random()*height);
			if (!cells[y][x].getHasMine())
				cells[y][x].setHasMine(true);
		}

		/*for (var i in cells) {
			var str = '';
			for (var j in cells[i]) {
				if (cells[i][j].getHasMine())
					str+=1;
				else
					str+=0;
				str+=', ';
			}
			console.log(str);
		}*/
	};

	var calculateMineNumPerCell = function(){
		var cells = board.getCells();
		for (var i=0; i<cells.length; i++) {
			for (var j=0; j<cells[i].length; j++) {
				if (cells[i][j].getHasMine()) {
					for (var k in Constants.NEIGHBOUR_COORDS) {
						if ( (j+Constants.NEIGHBOUR_COORDS[k].x)>=0 && (j+Constants.NEIGHBOUR_COORDS[k].x)<width
							&& (i+Constants.NEIGHBOUR_COORDS[k].y)>=0 && (i+Constants.NEIGHBOUR_COORDS[k].y)<height) {
							cells[i+Constants.NEIGHBOUR_COORDS[k].y][j+Constants.NEIGHBOUR_COORDS[k].x].incrSurrMines();
						}
					}
				}
			}
		}

		/*for (var i in cells) {
			var str = '';
			for (var j in cells[i]) {
				if (cells[i][j].getHasMine())
					str+='*';
				else
					str+=cells[i][j].getSurrMines();
				str+=', ';
			}
			console.log(str);
		}*/
	};

	// Public methods
	var init = function(boardWidth, boardHeight){
		board = new BoardModel(boardWidth, boardHeight);
		width = boardWidth;
		height = boardHeight;

		// Generating Mines
		// TODO first click should be always "safe"
		// TODO every mine should be "reachable", so we shouldn't ever have this pattern (the central mine is not reachable):
		//		***
		//		***
		//		***
		placeMines();

		calculateMineNumPerCell();
	};
	// remove from controller (maybe)
	var initEvents = function(){
		var cells = board.getCells();
		for (var i in cells) {
			for (var j in cells[i]) {
				cells[i][j].getView().getElem().on('click',function(){
					MineController.dig(this.getView().getModel(),cells,j,i,width,height);
				});
			}
		}
	};

	// Getters and Setters
	var getBoard = function(){
		return board;
	};

	return {
		init: init,
		initEvents: initEvents,
		getBoard: getBoard
	};
})();