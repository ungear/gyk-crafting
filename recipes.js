export function createRecipeRow(recipe, spriteCoords, itemTitles){
  const recipeEl = document.createElement('div');
  recipeEl.classList.add('recipe');

  // recipe result
  const resultEl = createRecipeItem(recipe.result, spriteCoords, itemTitles)
  recipeEl.appendChild(resultEl);

  const arrow = document.createElement('div');
  arrow.innerHTML = "<span><=</span>";
  recipeEl.appendChild(arrow);

  // recipe ingredients
  recipe.ingredients.forEach(ing => {
    const ingEl = createRecipeItem(ing, spriteCoords, itemTitles);
    ingEl.classList.add('js-ingredient', 'clickable-ingredient');
    recipeEl.appendChild(ingEl);
  })
  return recipeEl;
}

function createRecipeItem(itemId, spriteCoords, itemTitles) {
  const el = document.createElement('div');
  el.classList.add('item-sprite');
  addSpriteIcon(el, itemId, spriteCoords);
  const itemTitle = itemTitles[itemId] || itemId;
  el.setAttribute('title', itemTitle);
  el.dataset.id = itemId;
  return el;
}

function addSpriteIcon(el, itemId, spriteCoords){
  const itemSpriteCoords = spriteCoords[itemId];
  if(itemSpriteCoords){
    el.style.backgroundPosition = itemSpriteCoords;
  }
}