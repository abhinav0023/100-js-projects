let text = document.getElementById('count');
let total = document.getElementById("total");
let left = document.getElementById("left");

const totalCount = 50;

text.addEventListener('input', function () {
    const textValue = text.value;
    console.log(textValue); // Logs value as you type
    let count = textValue.length;
    console.log(count)

    total.innerHTML = count;
    left.innerHTML = 50 - count

    if(count >= 50){
        text.disabled = true;
    }
  });