
document.getElementById('search-btn').addEventListener('click', function() {
    const searchInput = document.getElementById('search-input').value;
    console.log(`Searching for: ${searchInput}`);
    document.getElementById('recipe-details').innerHTML = '';
    
    const recipeDetails = document.getElementById('recipe-details');
    const recipeCard = document.createElement('div');
    recipeCard.className = 'recipe-card';
    recipeCard.innerHTML = `
        <h2>Chocolate Cake</h2>
        <img src="chocolate-cake.jpg" alt="Chocolate Cake">
        <p>Ingredients: Cocoa Powder, Sugar, Eggs, Flour, Milk</p>
        <p>Instructions: Mix ingredients, bake in oven.</p>
        <button onclick="addToFavorites(this)">Add to Favorites</button>
    `;
    recipeDetails.appendChild(recipeCard);
});

function addToFavorites(button) {
    const recipeCard = button.parentElement;
    const favoritesList = document.getElementById('favorites-list');
    const favoriteRecipe = document.createElement('div');
    favoriteRecipe.className = 'favorite-recipe';
    favoriteRecipe.innerHTML = recipeCard.innerHTML;
    favoritesList.appendChild(favoriteRecipe);
   
    recipeCard.remove();
    
    favoriteRecipe.classList.add('highlight');
}
// Add this to your existing app.js
document.getElementById('add-recipe-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const recipeName = document.getElementById('recipe-name').value;
    const recipeIngredients = document.getElementById('recipe-ingredients').value;
    const recipeInstructions = document.getElementById('recipe-instructions').value;
   
    const recipeDetails = document.getElementById('recipe-details');
    const recipeCard = document.createElement('div');
    recipeCard.className = 'recipe-card';
    recipeCard.innerHTML = `
       <h2>${recipeName}</h2>
       <p>Ingredients: ${recipeIngredients}</p>
       <p>Instructions: ${recipeInstructions}</p>
       <button onclick="addToFavorites(this)">Add to Favorites</button>
    `;
    recipeDetails.appendChild(recipeCard);
   
    // Clear the form
    document.getElementById('add-recipe-form').reset();
   });
   
   function addToFavorites(button) {
    const recipeCard = button.parentElement;
    const favoritesList = document.getElementById('favorites-list');
    const favoriteRecipe = document.createElement('div');
    favoriteRecipe.className = 'favorite-recipe';
    favoriteRecipe.innerHTML = recipeCard.innerHTML;
    favoritesList.appendChild(favoriteRecipe);
    // Optionally, remove the recipe from the search results
    recipeCard.remove();
   }
   