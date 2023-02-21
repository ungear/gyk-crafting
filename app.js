(async function(){
  const resp = await fetch('./result.json');
  const data = await resp.json();
  
  const rootEl = document.getElementById('root');
  data.recipes.forEach(recipe => {
    const recipeRow = createRecipeRow(recipe, data.spriteCoords, data.itemTitles);
    rootEl.appendChild(recipeRow);
  });

  rootEl.querySelectorAll('.js-ingredient').forEach(x => {
    x.addEventListener('click', onIngredientClick.bind(null, data))
  })  
  
  function createRecipeRow(recipe, spriteCoords, itemTitles){
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

  function onIngredientClick(fullDataSet, event) {
    const ingId = event.target.dataset.id;
    const recipesForItem =  fullDataSet.recipes.filter(r => r.result === ingId);
    if(recipesForItem.length === 0) return;
    
    const recipeRows = recipesForItem.map(x => createRecipeRow(x, fullDataSet.spriteCoords, fullDataSet.itemTitles))
    const existingPopup = document.querySelector('.popup');
    if(existingPopup) existingPopup.remove();

    const popupContent = document.querySelector('#popup-template').content.firstElementChild.cloneNode(true);
    popupContent.querySelector('.popup__header').textContent = fullDataSet.itemTitles[ingId];
    const popupBody = popupContent.querySelector('.popup__body');
    recipeRows.forEach(x => {
      popupBody.appendChild(x);
    });
    document.body.appendChild(popupContent);
    popupContent.style.top = event.target.offsetTop + 34 + 'px';
    popupContent.style.left = event.target.offsetLeft + 'px';
  }
})()