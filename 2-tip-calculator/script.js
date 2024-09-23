// access element

const billAmount = document.getElementById("bill");
const tipAmount = document.getElementById("tip");
const totalAmount = document.getElementById("totalAmount");
const btn = document.getElementById("calculate");

// function to calculate total
// calculateTotal(); //
function calculateTotal() {
  const billValue = billAmount.value;
  const tipValue = tipAmount.value;
  const totalValue = billValue * (1 + tipValue / 100);

  totalAmount.innerText = totalValue.toFixed(2);
}

btn.addEventListener("click", calculateTotal);
