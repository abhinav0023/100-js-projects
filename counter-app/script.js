let count = document.getElementById('count');

document.addEventListener('keydown', function(event){
    if (event.key === ' ') {
        // increase count by 1
        count.textContent = parseInt(count.textContent) + 1;
      } else if (event.key === 'Control') {
        count.textContent = parseInt(count.textContent) - 1;
      }
      else if (event.key === "-") {
        count.textContent = "0";
      }
});