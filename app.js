(async function(){
  const resp = await fetch('./result.json');
  const data = await resp.json();
  
  const rootEl = document.getElementById('root');
  data.recipes.forEach(recipe => {
    const recipeEl = document.createElement('div');
    recipeEl.classList.add('recipe');

    // recipe result
    const resultEl = createRecipeItem(recipe.result, data.spriteCoords, data.itemTitles)
    recipeEl.appendChild(resultEl);

    const arrow = document.createElement('div');
    arrow.innerText = "<=";
    recipeEl.appendChild(arrow);

    // recipe ingredients
    recipe.ingredients.forEach(ing => {
      const ingEl = createRecipeItem(ing, data.spriteCoords, data.itemTitles);
      recipeEl.appendChild(ingEl);
    })
    
    rootEl.appendChild(recipeEl);
  });

  function createRecipeItem(itemId, spriteCoords, itemTitles) {
    const el = document.createElement('div');
    el.classList.add('item-sprite');
    addSpriteIcon(el, itemId, spriteCoords);
    const itemTitle = itemTitles[itemId] || itemId;
    el.setAttribute('title', itemTitle);
    return el;
  }

  function addSpriteIcon(el, itemId, spriteCoords){
    const itemSpriteCoords = spriteCoords[itemId];
    if(itemSpriteCoords){
      el.style.backgroundPosition = itemSpriteCoords;
    }
  }
})()