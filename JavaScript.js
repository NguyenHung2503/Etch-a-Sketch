
    const container = document.querySelector('#container');
    const resizeBtn = document.getElementById('resize-btn');
    const resetBtn = document.getElementById('reset-btn');
    const clearBtn = document.getElementById('clear-btn');
    const randomColorBtn = document.getElementById('random-color-btn');

    let isRandomColor = false;

    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for(let i = 0; i < 6; i++) {
       color += letters[Math.floor(Math.random() * 16)];
      }
        return color;
      }

  function createGrid(size) {
  container.innerHTML = '';
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');

    const paintCell = (e) => {
      e.preventDefault(); 
      if (isRandomColor) {
        cell.classList.remove('color');
        cell.style.backgroundColor = getRandomColor();
      } else {
        cell.style.backgroundColor = '';
        cell.classList.add('color');
      }
    };

    cell.addEventListener('mouseenter', paintCell);
    cell.addEventListener('touchstart', paintCell);
    cell.addEventListener('touchmove', paintCell);

    container.appendChild(cell);
  }
}

  
    
    createGrid(16);

    resizeBtn.addEventListener('click', () => {
      let newSize = prompt('Enter new grid size (1-100):');
       if (newSize === null) {
    return;
  }
      newSize = parseInt(newSize);
      if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert('Please enter a valid number between 1 and 100.');
        return;
      }
      createGrid(newSize);
    });

    clearBtn.addEventListener('click', () => {
    const cells = container.querySelectorAll('.cell');
    cells.forEach(cell => {
    cell.classList.remove('color');      
    cell.style.backgroundColor = '';      
      });
    });


    resetBtn.addEventListener('click', () => {
      createGrid(16);
    });

    
randomColorBtn.addEventListener('click', () => {
  isRandomColor = !isRandomColor;

  const cells = container.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.classList.remove('color');
    cell.style.backgroundColor = '';
  });
});
