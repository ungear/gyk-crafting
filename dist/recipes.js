// TODO: replace any with null
export function createRecipeRow(recipe, spriteCoords, itemTitles) {
    const recipeEl = document.createElement('div');
    recipeEl.classList.add('recipe');
    // recipe result
    const resultEl = createRecipeItem(recipe.result, spriteCoords, itemTitles);
    recipeEl.appendChild(resultEl);
    const arrow = document.createElement('div');
    arrow.classList.add("recipe__arrow");
    arrow.innerHTML = "<span><=</span>";
    recipeEl.appendChild(arrow);
    // recipe ingredients
    // TODO: replace any with null
    recipe.ingredients.forEach((ing) => {
        const ingEl = createRecipeItem(ing, spriteCoords, itemTitles);
        ingEl.classList.add('js-ingredient', 'clickable-ingredient');
        recipeEl.appendChild(ingEl);
    });
    return recipeEl;
}
// TODO: replace any with null
function createRecipeItem(itemId, spriteCoords, itemTitles) {
    const el = document.createElement('div');
    el.classList.add('item-sprite');
    addSpriteIcon(el, itemId, spriteCoords);
    const itemTitle = itemTitles[itemId] || itemId;
    el.setAttribute('title', itemTitle);
    el.dataset.id = itemId;
    return el;
}
// TODO: replace any with null
function addSpriteIcon(el, itemId, spriteCoords) {
    const itemSpriteCoords = spriteCoords[itemId];
    if (itemSpriteCoords) {
        el.style.backgroundPosition = itemSpriteCoords;
    }
}
