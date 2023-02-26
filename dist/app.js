import { createRecipeRow } from './recipes.js';
import { Popup } from './popup.js';
(async function () {
    const resp = await fetch('./result.json');
    const data = await resp.json();
    const rootEl = document.getElementById('root');
    const popup = new Popup();
    data.recipes.forEach(recipe => {
        // TODO what if rootEl is null
        const recipeRow = createRecipeRow(recipe, data.spriteCoords, data.itemTitles);
        rootEl?.appendChild(recipeRow);
    });
    // TODO what if rootEl is null
    rootEl?.querySelectorAll('.js-ingredient').forEach(x => {
        x.addEventListener('click', onIngredientClick.bind(null, data));
    });
    // TODO what if rootEl is null
    rootEl?.addEventListener('click', () => {
        popup.hidePopup();
    });
    function onIngredientClick(fullDataSet, event) {
        popup.hidePopup();
        event.stopPropagation();
        const targetEl = event.target;
        const ingId = targetEl.dataset.id;
        if (!ingId)
            return;
        const recipesForItem = fullDataSet.recipes.filter((r) => r.result === ingId);
        if (recipesForItem.length === 0)
            return;
        const recipeRows = recipesForItem.map((x) => createRecipeRow(x, fullDataSet.spriteCoords, fullDataSet.itemTitles));
        popup.showPopup({
            title: fullDataSet.itemTitles[ingId],
            recipeRows,
            targetEl,
        });
    }
})();
