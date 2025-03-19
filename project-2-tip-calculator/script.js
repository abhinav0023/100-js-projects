document.getElementById("calculate").addEventListener("click", function() {
    let bill = parseFloat(document.getElementById("bill").value);
    let percentage = parseFloat(document.getElementById("percentage").value);
    let error = document.getElementById("error");
    let result = document.getElementById("result");

    error.textContent = "";
    result.textContent = "";

    if (isNaN(bill) || bill <= 0) {
        error.textContent = "Please enter a valid bill amount.";
        return;
    }
    if (isNaN(percentage) || percentage < 0 || percentage > 100) {
        error.textContent = "Please enter a valid tip percentage (0-100).";
        return;
    }
    
    let tipAmount = (bill * percentage) / 100;
    let totalAmount = bill + tipAmount;

    result.textContent = `Tip Amount: $${tipAmount.toFixed(2)} | Total Bill: $${totalAmount.toFixed(2)}`;
});
