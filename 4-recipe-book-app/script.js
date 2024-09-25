const apiKey = '219af9a207db48c885c36801ba374971';
const url = `https://api.spoonacular.com/recipes/random?number=10&apiKey=${apiKey}`;

// Fetching recipes from the Spoonacular API
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Recipes:', data.recipes);  // Log received recipes
    const cardsContainer = document.querySelector('.cards-container');  // Ensure the container exists

    // Clear any previous cards (if reloading data)
    cardsContainer.innerHTML = '';

    // Loop through each recipe and create a new card
    data.recipes.forEach(recipe => {
      // Create a new card div
      const card = document.createElement('div');
      card.classList.add('cards');  // Apply the 'cards' class

      // Populate the card with recipe data
      card.innerHTML = `
        <div class="image"><img src="${recipe.image}" alt="${recipe.title}"></div>
        <div class="name">${recipe.title}</div>
        <div class="ingredients">${recipe.extendedIngredients.map(ing => ing.name).join(', ')}</div>
        <div class="btn"><a href="${recipe.sourceUrl}" target="_blank">View Recipe</a></div>
      `;

      // Append the card to the cards container
      cardsContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error fetching recipes:', error);  // Handle errors properly
  });