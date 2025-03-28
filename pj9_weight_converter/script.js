let pounds_weight = dicument.getElementById("weight");
let kg_weight = dicument.getElementById("convert");
pounds_weight.addEventListener("input", function(){
    let lbs = parseFloat(pounds_weight.value);
    if (!isNaN(lbs)) {
        let kg = (lbs / 2.20462).toFixed(2);
        kg_weight.innerText = kg;
    } else {
        kg_weight.innerText = 0;
    }
})