import { ItemTitlesMap, Recipe, SpriteCoordsMap } from "./types/recipes";

export function createRecipeRow(recipe: Recipe, spriteCoords: SpriteCoordsMap, itemTitles: ItemTitlesMap): HTMLElement{
  const recipeEl = document.createElement('div');
  recipeEl.classList.add('recipe', 'js-recipeRow');

  // recipe result
  const resultEl = createRecipeItem(recipe.result, spriteCoords, itemTitles);
  resultEl.classList.add('js-result');
  recipeEl.appendChild(resultEl);

  const arrow = document.createElement('div');
  arrow.classList.add("recipe__arrow");
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

function createRecipeItem(itemId: string, spriteCoords: SpriteCoordsMap, itemTitles: ItemTitlesMap): HTMLElement {
  const el = document.createElement('div');
  el.classList.add('item-sprite');
  addSpriteIcon(el, itemId, spriteCoords);
  const itemTitle = itemTitles[itemId] || itemId;
  el.setAttribute('title', itemTitle);
  el.dataset.id = itemId;
  return el;
}

function addSpriteIcon(el: HTMLElement, itemId: string, spriteCoords: SpriteCoordsMap){
  const itemSpriteCoords = spriteCoords[itemId];
  if(itemSpriteCoords){
    el.style.backgroundPosition = itemSpriteCoords;
  }
}