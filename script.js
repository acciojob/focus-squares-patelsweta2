    const squares = document.querySelectorAll('.square');

    function hoverEffect(selectedSquare) {
      squares.forEach(square => {
		  square.style.backgroundColor = '#E6E6FA';
        if (square !== selectedSquare) {
          square.style.backgroundColor = 'brown';
        }
      });
    }

    squares.forEach(square => {
      square.addEventListener('mouseover', function() {
        hoverEffect(this);
      });
    });