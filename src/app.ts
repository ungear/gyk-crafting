import { createRecipeRow } from './recipes';
import { Popup } from './popup';
import { RecipeSourceDataset } from './types/recipes';
import { Recipe} from './types/recipes';
import data from '../result.json';


(async function(){
  // Recipes data are hardcoded so far
  //const resp = await fetch('./result.json');
  //const data: RecipeSourceDataset = await resp.json();

  const listEl = document.querySelector('.js-list');
  const popup = new Popup();

  data.recipes.forEach(recipe => {
    const recipeRow = createRecipeRow(recipe, data.spriteCoords, data.itemTitles);
    listEl?.appendChild(recipeRow);
  });

  listEl?.querySelectorAll('.js-ingredient').forEach(x => {
    x.addEventListener('click', onIngredientClick.bind(null, data))
  });
  listEl?.addEventListener('click', ()=>{
    popup.hidePopup();
  })

  function onIngredientClick(fullDataSet: RecipeSourceDataset, event: Event) {
    popup.hidePopup();
    event.stopPropagation();
    const targetEl = event.target as HTMLDivElement;
    const ingId = targetEl.dataset.id;
    if(!ingId) return;
    const recipesForItem =  fullDataSet.recipes.filter((r: any) => r.result === ingId);
    if(recipesForItem.length === 0) return;

    const recipeRows = recipesForItem.map((x: any) => createRecipeRow(x, fullDataSet.spriteCoords, fullDataSet.itemTitles))

    popup.showPopup({
      title: fullDataSet.itemTitles[ingId],
      recipeRows,
      targetEl,
    })
  }
})()

