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
  if(!listEl) throw new Error("The recipes list root element not found");

  const popup = new Popup();

  data.recipes.forEach(recipe => {
    const recipeRow = createRecipeRow(recipe, data.spriteCoords, data.itemTitles);
    listEl.appendChild(recipeRow);
  });

  listEl.querySelectorAll('.js-ingredient').forEach(x => {
    x.addEventListener('click', onIngredientClick.bind(null, data))
  });

  listEl.addEventListener('click', ()=>{
    popup.hidePopup();
  })

  const searchBar = document.querySelector('.js-searchbar');
  if(!searchBar) throw new Error("The searchbar element not found");
  searchBar.addEventListener('input', onSearchbarTermChanged)

  // TODO: set correct typing for argument
  function onSearchbarTermChanged(event: any){
    const searchTerm: string | null = event.target.value;
    // show all recipes if the term is too short
    if(!searchTerm || searchTerm.length < 3) {
      document.querySelectorAll('.js-recipeRow').forEach(rowEl => {
        rowEl.classList.remove('recipe--hidden');
      })
      return;
    }

    const normalizedTerm = searchTerm.toLowerCase();
    hideNonMatchingRecipes(normalizedTerm);
  }

  function hideNonMatchingRecipes(term: string){
    document.querySelectorAll('.js-recipeRow').forEach(rowEl => {
      const resultTitle = rowEl.querySelector('.js-result')?.getAttribute("title");
      const ingredientTitles = Array.from(rowEl.querySelectorAll('.js-ingredient'))
        .map(el => el.getAttribute("title"))
      
      const isRecipeMatchTerm = [
        resultTitle,
        ...ingredientTitles
      ]
        .filter((x): x is string => typeof x === 'string')
        .some(title => title.toLowerCase().includes(term));
      rowEl.classList.toggle('recipe--hidden', !isRecipeMatchTerm);
    });
  }

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

