function fetchingFood(){
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
    .then(response => response.json())
    .then(data => 
         data.meals.forEach(meal => {
             console.log(meal.strMeal);
             console.log(meal.strInstructions);
             console.log(meal.strYoutube);

            // access all elements
            let mealName = document.getElementById('mealName');
            let inst = document.getElementById('instructions');
            let img = document.getElementById('image');

            mealName.innerHTML = meal.strMeal;
            inst.innerHTML = meal.strInstructions;
             img.src = meal.strMealThumb;
         })
     )
    // access meals
    

  
}

fetchingFood();