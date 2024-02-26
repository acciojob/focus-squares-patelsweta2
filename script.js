//your JS code here. If required.

const squares = document.querrySelectorAll('.square');

function hoverEffect(selectedSquare){
	squares.forEach(square => {
		if(square !== selectedSquare){
			square.style.backgroundColor = 'brown';
		}
	});
}

squares.forEach(square => {
	square.addEventListener('mouseover', function()){
		hoverEffect(this);
	}
})
