// get elements
let btn = document.querySelector('button');
let dice = document.getElementById('dice');
let history = document.getElementById('roll_history');

// event listener

btn.addEventListener('click', function() {
  // generate random number between 1 and 6
  let randomNumber = Math.floor(Math.random() * 6);
  const diceNumber = [
    "&#9856;",
    "&#9857;",
    "&#9858;",
    "&#9859;",
    "&#9860;",
    "&#9861;",
  ]
  dice.innerHTML = diceNumber[randomNumber];
  // add to history
  history.innerHTML += `<li>${diceNumber[randomNumber]}</li>`;

  for(let i = 0; i < history.length; i++){
     // add horizontal line after every list item 
     history.children[i].style.borderBottom = "1px solid #111";
  }
});


