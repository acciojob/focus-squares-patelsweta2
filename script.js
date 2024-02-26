    const squares = document.querySelectorAll('.square');

    function hoverEffect(selectedSquare) {
      squares.forEach(square => {
		  // square.style.backgroundColor = '#E6E6FA';
        if (square !== selectedSquare) {
          square.style.backgroundColor = '#6F4E37';
        }
      });
    }

	function resetColors() {
      squares.forEach(square => {
        square.style.backgroundColor = '#E6E6FA';
      });
    }

    squares.forEach(square => {
      square.addEventListener('mouseover', function() {
        hoverEffect(this);
      });

		square.addEventListener('mouseout', function() {
        resetColors();
      });
    });