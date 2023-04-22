/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/popup.ts":
/*!**********************!*\
  !*** ./src/popup.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Popup": () => (/* binding */ Popup)
/* harmony export */ });
class Popup {
    templateId = 'popup-template';
    showPopup({ title, recipeRows, targetEl }) {
        // remove existing popup
        const existingPopup = document.querySelector('.popup');
        if (existingPopup)
            existingPopup.remove();
        // generate new popup using the template and passed data
        // TODO: what if querySelector() is null
        const popupContent = document.querySelector(`#${this.templateId}`)?.content.firstElementChild.cloneNode(true);
        popupContent.querySelector('.popup__header').textContent = title;
        const popupBody = popupContent.querySelector('.popup__body');
        // TODO: replace any with type
        recipeRows.forEach((x) => {
            popupBody.appendChild(x);
        });
        document.body.appendChild(popupContent);
        popupContent.style.top = targetEl.offsetTop + 34 + 'px';
        popupContent.style.left = targetEl.offsetLeft + 'px';
    }
    hidePopup() {
        document.querySelector('.popup')?.remove();
    }
}


/***/ }),

/***/ "./src/recipes.ts":
/*!************************!*\
  !*** ./src/recipes.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRecipeRow": () => (/* binding */ createRecipeRow)
/* harmony export */ });
function createRecipeRow(recipe, spriteCoords, itemTitles) {
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
    recipe.ingredients.forEach(ing => {
        const ingEl = createRecipeItem(ing, spriteCoords, itemTitles);
        ingEl.classList.add('js-ingredient', 'clickable-ingredient');
        recipeEl.appendChild(ingEl);
    });
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
function addSpriteIcon(el, itemId, spriteCoords) {
    const itemSpriteCoords = spriteCoords[itemId];
    if (itemSpriteCoords) {
        el.style.backgroundPosition = itemSpriteCoords;
    }
}


/***/ }),

/***/ "./result.json":
/*!*********************!*\
  !*** ./result.json ***!
  \*********************/
/***/ ((module) => {

module.exports = JSON.parse('{"recipes":[{"result":"black_paint","ingredients":["graphite_powder","water"]},{"result":"black_paint","ingredients":["ash","oil"]},{"result":"black_paint","ingredients":["death_powder","water"]},{"result":"white_paint","ingredients":["white_powder","oil"]},{"result":"white_paint","ingredients":["alcohol","slowing_solution"]},{"result":"white_paint","ingredients":["electric_powder","water"]},{"result":"freshener","ingredients":["oil","order_solution"]},{"result":"energy_potion","ingredients":["acceleration_powder","acceleration_solution"]},{"result":"spices","ingredients":["salt","health_solution"]},{"result":"energy_elixir","ingredients":["acceleration_powder","slowing_solution"]},{"result":"energy_elixir","ingredients":["slowing_powder","acceleration_solution"]},{"result":"dark_elixir","ingredients":["death_powder","blood"]},{"result":"heal_potion","ingredients":["health_powder","chaos_solution"]},{"result":"heal_potion","ingredients":["life_powder","health_solution"]},{"result":"growth_enhancer","ingredients":["ash","life_solution"]},{"result":"zombie_juice","ingredients":["health_powder","blood"]},{"result":"brown_paint","ingredients":["slowing_powder","oil"]},{"result":"blue_paint","ingredients":["acceleration_powder","oil"]},{"result":"dark_green_paint","ingredients":["health_powder","oil"]},{"result":"green_paint","ingredients":["order_powder","oil"]},{"result":"dark_violet_paint","ingredients":["death_powder","oil"]},{"result":"violet_paint","ingredients":["chaos_powder","oil"]},{"result":"red_paint","ingredients":["toxic_powder","oil"]},{"result":"yellow_paint","ingredients":["life_powder","oil"]},{"result":"glue","ingredients":["health_powder","life_solution","chaos_extract"]},{"result":"preservative","ingredients":["life_powder","slowing_solution","slowing_extract"]},{"result":"preservative","ingredients":["slowing_powder","life_solution","slowing_extract"]},{"result":"speed_potion","ingredients":["acceleration_powder","chaos_solution","blood"]},{"result":"digestion_potion","ingredients":["health_powder","toxic_solution","acceleration_extract"]},{"result":"restoring_potion","ingredients":["order_powder","health_solution","health_extract"]},{"result":"protection_potion","ingredients":["order_powder","slowing_solution","slowing_extract"]},{"result":"flavor_enhancer","ingredients":["ash","toxic_solution","life_extract"]},{"result":"acid","ingredients":["toxic_powder","chaos_solution","toxic_extract"]},{"result":"aromatizer","ingredients":["acceleration_powder","alcohol","life_extract"]},{"result":"alkali","ingredients":["life_powder","death_solution","blood"]},{"result":"tanning_agent","ingredients":["slowing_powder","death_solution","order_extract"]},{"result":"balsamic_solution","ingredients":["chaos_powder","water","death_extract"]},{"result":"rage_potion","ingredients":["chaos_powder","death_solution","toxic_extract"]},{"result":"berserk_potion","ingredients":["toxic_powder","death_solution","death_extract"]},{"result":"golden_elixir","ingredients":["gold_powder","toxic_solution","chaos_extract"]},{"result":"golden_elixir","ingredients":["gold_powder","order_solution","health_extract"]},{"result":"silver_elixir","ingredients":["silver_powder","order_solution","life_extract"]},{"result":"silver_elixir","ingredients":["silver_powder","chaos_solution","order_extract"]},{"result":"memory_tincture","ingredients":["memory_powder","silver_powder","gold_powder"]},{"result":"acceleration_solution","ingredients":["honey"]},{"result":"acceleration_solution","ingredients":["blue_jelly"]},{"result":"chaos_solution","ingredients":["moth"]},{"result":"chaos_solution","ingredients":["bat_wing"]},{"result":"death_solution","ingredients":["dark_brain"]},{"result":"death_solution","ingredients":["black_jelly"]},{"result":"health_solution","ingredients":["carrot"]},{"result":"health_solution","ingredients":["hiccup_grass"]},{"result":"health_solution","ingredients":["cabbage"]},{"result":"life_solution","ingredients":["brain"]},{"result":"life_solution","ingredients":["maggot"]},{"result":"life_solution","ingredients":["yellow_flower"]},{"result":"order_solution","ingredients":["bee"]},{"result":"order_solution","ingredients":["green_jelly"]},{"result":"order_solution","ingredients":["white_flower"]},{"result":"slowing_solution","ingredients":["beeswax"]},{"result":"slowing_solution","ingredients":["hops"]},{"result":"slowing_solution","ingredients":["fat"]},{"result":"toxic_solution","ingredients":["orange_jelly"]},{"result":"toxic_solution","ingredients":["red_mushroom"]},{"result":"acceleration_powder","ingredients":["hemp"]},{"result":"acceleration_powder","ingredients":["honey"]},{"result":"chaos_powder","ingredients":["butterfly"]},{"result":"chaos_powder","ingredients":["bat_wing"]},{"result":"death_powder","ingredients":["dark_intestine"]},{"result":"health_powder","ingredients":["pumpkin"]},{"result":"health_powder","ingredients":["cabbage"]},{"result":"health_powder","ingredients":["crop_waste"]},{"result":"life_powder","ingredients":["intestine"]},{"result":"life_powder","ingredients":["sulfur"]},{"result":"order_powder","ingredients":["bee"]},{"result":"slowing_powder","ingredients":["hops"]},{"result":"slowing_powder","ingredients":["spider_web"]},{"result":"toxic_powder","ingredients":["onion"]},{"result":"toxic_powder","ingredients":["red_flower"]},{"result":"white_powder","ingredients":["bone"]},{"result":"white_powder","ingredients":["limestone"]},{"result":"graphite_powder","ingredients":["graphite"]},{"result":"gold_powder","ingredients":["gold_nugget"]},{"result":"silver_powder","ingredients":["silver_nugget"]},{"result":"electric_powder","ingredients":["eel"]},{"result":"order_powder","ingredients":["faceted_emerald"]},{"result":"slowing_powder","ingredients":["pyrite"]},{"result":"acceleration_extract","ingredients":["hemp"]},{"result":"acceleration_extract","ingredients":["blue_jelly"]},{"result":"chaos_extract","ingredients":["moth"]},{"result":"chaos_extract","ingredients":["butterfly"]},{"result":"death_extract","ingredients":["black_jelly"]},{"result":"death_extract","ingredients":["dark_heart"]},{"result":"health_extract","ingredients":["lentils"]},{"result":"health_extract","ingredients":["pumpkin"]},{"result":"life_extract","ingredients":["heart"]},{"result":"life_extract","ingredients":["maggot"]},{"result":"life_extract","ingredients":["yellow_flower"]},{"result":"order_extract","ingredients":["green_jelly"]},{"result":"order_extract","ingredients":["white_flower"]},{"result":"slowing_extract","ingredients":["beeswax"]},{"result":"slowing_extract","ingredients":["spider_web"]},{"result":"toxic_extract","ingredients":["onion"]},{"result":"toxic_extract","ingredients":["orange_jelly"]},{"result":"health_extract","ingredients":["nori"]},{"result":"boost_fertilizer_i","ingredients":["peat","energy_elixir"]},{"result":"boost_fertilizer_ii","ingredients":["peat","energy_elixir"]},{"result":"quality_fertilizer_i","ingredients":["peat","growth_enhancer"]},{"result":"quality_fertilizer_ii","ingredients":["peat","flavor_enhancer"]},{"result":"paper_glop","ingredients":["bucket_of_clear_water","wheat"]},{"result":"bucket_of_blood","ingredients":["flitch","blood"]},{"result":"alchemists_bag","ingredients":["skin","complex_iron_parts","tanning_agent"]},{"result":"farmer%27s_bag","ingredients":["skin","complex_iron_parts","tanning_agent"]},{"result":"fishermans_bag","ingredients":["skin","complex_iron_parts","tanning_agent"]},{"result":"tool_bag","ingredients":["skin","complex_iron_parts","tanning_agent"]},{"result":"potion_bag","ingredients":["skin","steel_parts","tanning_agent"]},{"result":"builders_bag","ingredients":["skin","steel_parts","tanning_agent"]},{"result":"food_bag","ingredients":["skin","steel_parts","tanning_agent"]},{"result":"universal_bag","ingredients":["skin","complex_iron_parts","tanning_agent"]},{"result":"big_universal_bag","ingredients":["skin","steel_parts","tanning_agent"]},{"result":"ink","ingredients":["conical_flasks","water","black_paint"]},{"result":"pen_and_ink","ingredients":["feather","ink"]},{"result":"pigskin_paper","ingredients":["skin"]},{"result":"pigskin_paper","ingredients":["bat_wing"]},{"result":"clean_paper","ingredients":["pigskin_paper"]},{"result":"softcover","ingredients":["pigskin_paper"]},{"result":"hard_cover","ingredients":["softcover","tanning_agent","faith"]},{"result":"hard_cover","ingredients":["hard_cover","steel_parts","faith"]},{"result":"hard_cover","ingredients":["hard_cover","gold_jewelry_details"]},{"result":"hemp_rope","ingredients":["hemp"]},{"result":"candle","ingredients":["fat","beeswax","hemp_rope"]},{"result":"candle2","ingredients":["fat","beeswax","white_paint"]},{"result":"candle3","ingredients":["beeswax","white_paint","hemp_rope"]},{"result":"incense","ingredients":["freshener"]},{"result":"incense_ii","ingredients":["aromatizer"]},{"result":"lye_injection","ingredients":["alkali","water","conical_flasks"]},{"result":"acid_injection","ingredients":["acid","water","conical_flasks"]},{"result":"glue_injection","ingredients":["glue","water","conical_flasks"]},{"result":"dark_injection","ingredients":["dark_elixir","water","conical_flasks"]},{"result":"preservative_injection","ingredients":["preservative","water","conical_flasks"]},{"result":"restore_injection","ingredients":["balsamic_solution","water","conical_flasks"]},{"result":"silver_injection","ingredients":["silver_elixir","water","conical_flasks"]},{"result":"gold_injection","ingredients":["golden_elixir","water","conical_flasks"]}],"spriteCoords":{"black_paint":"-864px -1008px","graphite_powder":"-360px -828px","water":"-0px -324px","ash":"-324px -828px","oil":"-0px -396px","death_powder":"-252px -828px","white_paint":"-828px -1008px","white_powder":"-396px -828px","alcohol":"-0px -360px","slowing_solution":"-72px -864px","freshener":"-792px -864px","order_solution":"-144px -864px","energy_potion":"-216px -936px","acceleration_powder":"-216px -828px","acceleration_solution":"-216px -864px","spices":"-612px -828px","salt":"-432px -828px","health_solution":"-180px -864px","energy_elixir":"-468px -864px","slowing_powder":"-72px -828px","dark_elixir":"-900px -864px","blood":"-396px -612px","heal_potion":"-36px -936px","health_powder":"-180px -828px","chaos_solution":"-288px -864px","life_powder":"-108px -828px","growth_enhancer":"-936px -864px","life_solution":"-108px -864px","zombie_juice":"-0px -936px","brown_paint":"-38px -1186px","blue_paint":"-74px -1186px","dark_green_paint":"-110px -1186px","green_paint":"-1px -1186px","order_powder":"-144px -828px","dark_violet_paint":"-146px -1186px","violet_paint":"-182px -1186px","chaos_powder":"-288px -828px","red_paint":"-218px -1186px","toxic_powder":"-36px -828px","yellow_paint":"-250px -1186px","glue":"-612px -864px","chaos_extract":"-288px -900px","preservative":"-648px -864px","slowing_extract":"-72px -900px","speed_potion":"-180px -936px","digestion_potion":"-144px -936px","toxic_solution":"-36px -864px","acceleration_extract":"-216px -900px","restoring_potion":"-252px -936px","health_extract":"-180px -900px","protection_potion":"-72px -936px","flavor_enhancer":"-720px -864px","life_extract":"-108px -900px","acid":"-576px -864px","toxic_extract":"-36px -900px","aromatizer":"-504px -864px","alkali":"-756px -864px","death_solution":"-252px -864px","tanning_agent":"-540px -864px","order_extract":"-144px -900px","balsamic_solution":"-684px -864px","death_extract":"-252px -900px","rage_potion":"-108px -936px","berserk_potion":"-324px -936px","golden_elixir":"-864px -864px","gold_powder":"-504px -828px","silver_elixir":"-828px -864px","silver_powder":"-468px -828px","memory_tincture":"-252px -1152px","memory_powder":"-216px -1152px","honey":"-468px -396px","blue_jelly":"-972px -360px","moth":"-720px -540px","bat_wing":"-900px -540px","dark_brain":"-504px -648px","black_jelly":"-1044px -360px","carrot":"-36px -360px","hiccup_grass":"-756px -504px","cabbage":"-108px -360px","brain":"-504px -612px","maggot":"-648px -540px","yellow_flower":"-720px -504px","bee":"-756px -540px","green_jelly":"-936px -360px","white_flower":"-684px -504px","beeswax":"-792px -540px","hops":"-252px -360px","fat":"-432px -612px","orange_jelly":"-1008px -360px","red_mushroom":"-540px -324px","hemp":"-828px -504px","butterfly":"-684px -540px","dark_intestine":"-576px -648px","pumpkin":"-216px -360px","crop_waste":"-900px -504px","intestine":"-576px -612px","sulfur":"-360px -648px","spider_web":"-864px -540px","onion":"-144px -360px","red_flower":"-648px -504px","bone":"-468px -612px","limestone":"-360px -576px","graphite":"-144px -576px","gold_nugget":"-144px -648px","silver_nugget":"-144px -612px","electric_powder":"-576px -828px","eel":"-648px -576px","faceted_emerald":"-288px -576px","pyrite":"-360px -612px","dark_heart":"-540px -648px","lentils":"-180px -360px","heart":"-540px -612px","nori":"-792px -396px","boost_fertilizer_i":"-1080px -504px","peat":"-936px -504px","boost_fertilizer_ii":"-1116px -504px","quality_fertilizer_i":"-1152px -504px","quality_fertilizer_ii":"-1188px -504px","paper_glop":"-1044px -432px","bucket_of_clear_water":"-720px -432px","wheat":"-324px -360px","bucket_of_blood":"-756px -432px","flitch":"-180px -504px","alchemists_bag":"-900px -720px","skin":"-432px -648px","complex_iron_parts":"-324px -540px","farmer%27s_bag":"-828px -720px","fishermans_bag":"-864px -720px","tool_bag":"-792px -720px","potion_bag":"-1013px -719px","steel_parts":"-216px -576px","builders_bag":"-1048px -719px","food_bag":"-1083px -719px","universal_bag":"-978px -719px","big_universal_bag":"-940px -719px","ink":"-972px -1008px","conical_flasks":"-468px -504px","pen_and_ink":"-1008px -1008px","feather":"-900px -1008px","pigskin_paper":"-0px -1008px","clean_paper":"-360px -1008px","softcover":"-1152px -1008px","hard_cover":"-0px -1044px","faith":"-648px -684px","gold_jewelry_details":"-216px -648px","hemp_rope":"-864px -504px","candle":"-288px -684px","candle2":"-360px -684px","candle3":"-396px -684px","incense":"-540px -684px","incense_ii":"-576px -684px","lye_injection":"-684px -900px","acid_injection":"-468px -900px","glue_injection":"-504px -900px","dark_injection":"-900px -900px","preservative_injection":"-540px -900px","restore_injection":"-576px -900px","silver_injection":"-792px -900px","gold_injection":"-864px -900px"},"itemTitles":{"black_paint":"Black paint","graphite_powder":"Graphite powder","water":"Water","ash":"Ash","oil":"Oil","death_powder":"Death powder","white_paint":"White paint","white_powder":"White powder","alcohol":"Alcohol","slowing_solution":"Slowing solution","freshener":"Freshener","order_solution":"Order solution","energy_potion":"Energy potion","acceleration_powder":"Acceleration powder","acceleration_solution":"Acceleration solution","spices":"Spices","salt":"Salt","health_solution":"Health solution","energy_elixir":"Energy elixir","slowing_powder":"Slowing powder","dark_elixir":"Dark elixir","blood":"Blood","heal_potion":"Heal potion","health_powder":"Health powder","chaos_solution":"Chaos solution","life_powder":"Life powder","growth_enhancer":"Growth enhancer","life_solution":"Life solution","zombie_juice":"Zombie juice","brown_paint":"Brown Paint","blue_paint":"Blue Paint","dark_green_paint":"Dark Green Paint","green_paint":"Green Paint","order_powder":"Order powder","dark_violet_paint":"Dark Violet Paint","violet_paint":"Violet Paint","chaos_powder":"Chaos powder","red_paint":"Red Paint","toxic_powder":"Toxic powder","yellow_paint":"Yellow Paint","glue":"Glue","chaos_extract":"Chaos extract","preservative":"Preservative","slowing_extract":"Slowing extract","speed_potion":"Speed potion","digestion_potion":"Digestion potion","toxic_solution":"Toxic solution","acceleration_extract":"Acceleration extract","restoring_potion":"Restoring potion","health_extract":"Health extract","protection_potion":"Protection potion","flavor_enhancer":"Flavor enhancer","life_extract":"Life extract","acid":"Acid","toxic_extract":"Toxic extract","aromatizer":"Aromatizer","alkali":"Alkali","death_solution":"Death solution","tanning_agent":"Tanning agent","order_extract":"Order extract","balsamic_solution":"Balsamic solution","death_extract":"Death extract","rage_potion":"Rage potion","berserk_potion":"Berserk potion","golden_elixir":"Golden elixir","gold_powder":"Gold powder","silver_elixir":"Silver elixir","silver_powder":"Silver powder","memory_tincture":"Memory tincture","memory_powder":"Memory powder","honey":"Honey","blue_jelly":"Blue jelly","moth":"Moth","bat_wing":"Bat wing","dark_brain":"Dark brain","black_jelly":"Black jelly","carrot":"Carrot","hiccup_grass":"Hiccup grass","cabbage":"Cabbage","brain":"Brain","maggot":"Maggot","yellow_flower":"Yellow flower","bee":"Bee","green_jelly":"Green jelly","white_flower":"White flower","beeswax":"Beeswax","hops":"Hops","fat":"Fat","orange_jelly":"Orange jelly","red_mushroom":"Red mushroom","hemp":"Hemp","butterfly":"Butterfly","dark_intestine":"Dark intestine","pumpkin":"Pumpkin","crop_waste":"Crop waste","intestine":"Intestine","sulfur":"Sulfur","spider_web":"Spider web","onion":"Onion","red_flower":"Red flower","bone":"Bone","limestone":"Limestone","graphite":"Graphite","gold_nugget":"Gold nugget","silver_nugget":"Silver nugget","electric_powder":"Electric powder","eel":"Eel","faceted_emerald":"Faceted emerald","pyrite":"Pyrite","dark_heart":"Dark heart","lentils":"Lentils","heart":"Heart","nori":"Nori","boost_fertilizer_i":"Boost fertilizer I","peat":"Peat","boost_fertilizer_ii":"Boost fertilizer II","quality_fertilizer_i":"Quality fertilizer I","quality_fertilizer_ii":"Quality fertilizer II","paper_glop":"Paper glop","bucket_of_clear_water":"Bucket of clear water","wheat":"Wheat","bucket_of_blood":"Bucket of blood","flitch":"Flitch","alchemists_bag":"Alchemist\'s bag","skin":"Skin","complex_iron_parts":"Complex iron parts","farmer%27s_bag":"Farmer\'s bag","fishermans_bag":"Fisherman\'s bag","tool_bag":"Tool bag","potion_bag":"Potion bag","steel_parts":"Steel parts","builders_bag":"Builder\'s bag","food_bag":"Food bag","universal_bag":"Universal bag","big_universal_bag":"Big universal bag","ink":"Ink","conical_flasks":"Conical flasks","pen_and_ink":"Pen and ink","feather":"Feather","pigskin_paper":"Pigskin paper","clean_paper":"Clean paper","softcover":"Softcover","hard_cover":"Hard cover","faith":"Faith","gold_jewelry_details":"Gold jewelry details","hemp_rope":"Hemp rope","candle":"Candle","candle2":"Candle","candle3":"Candle","incense":"Incense","incense_ii":"Incense II","lye_injection":"Lye injection","acid_injection":"Acid injection","glue_injection":"Glue injection","dark_injection":"Dark injection","preservative_injection":"Preservative injection","restore_injection":"Restore injection","silver_injection":"Silver injection","gold_injection":"Gold injection"}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _recipes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipes */ "./src/recipes.ts");
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup */ "./src/popup.ts");
/* harmony import */ var _result_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../result.json */ "./result.json");



(async function () {
    // Recipes data are hardcoded so far
    //const resp = await fetch('./result.json');
    //const data: RecipeSourceDataset = await resp.json();
    const listEl = document.querySelector('.js-list');
    const popup = new _popup__WEBPACK_IMPORTED_MODULE_1__.Popup();
    _result_json__WEBPACK_IMPORTED_MODULE_2__.recipes.forEach(recipe => {
        const recipeRow = (0,_recipes__WEBPACK_IMPORTED_MODULE_0__.createRecipeRow)(recipe, _result_json__WEBPACK_IMPORTED_MODULE_2__.spriteCoords, _result_json__WEBPACK_IMPORTED_MODULE_2__.itemTitles);
        listEl?.appendChild(recipeRow);
    });
    listEl?.querySelectorAll('.js-ingredient').forEach(x => {
        x.addEventListener('click', onIngredientClick.bind(null, _result_json__WEBPACK_IMPORTED_MODULE_2__));
    });
    listEl?.addEventListener('click', () => {
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
        const recipeRows = recipesForItem.map((x) => (0,_recipes__WEBPACK_IMPORTED_MODULE_0__.createRecipeRow)(x, fullDataSet.spriteCoords, fullDataSet.itemTitles));
        popup.showPopup({
            title: fullDataSet.itemTitles[ingId],
            recipeRows,
            targetEl,
        });
    }
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNmJhOTI1OGRjZTFkZDFkMDllOWIuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBLGdCQUFnQiw2QkFBNkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELGdCQUFnQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjRDO0FBQ1o7QUFDRTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHlDQUFLO0FBQzNCLElBQUkseURBQW9CO0FBQ3hCLDBCQUEwQix5REFBZSxTQUFTLHNEQUFpQixFQUFFLG9EQUFlO0FBQ3BGO0FBQ0EsS0FBSztBQUNMO0FBQ0EsaUVBQWlFLHlDQUFJO0FBQ3JFLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELHlEQUFlO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2d5ay1jcmFmdGluZy8uL3NyYy9wb3B1cC50cyIsIndlYnBhY2s6Ly9neWstY3JhZnRpbmcvLi9zcmMvcmVjaXBlcy50cyIsIndlYnBhY2s6Ly9neWstY3JhZnRpbmcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ3lrLWNyYWZ0aW5nL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9neWstY3JhZnRpbmcvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9neWstY3JhZnRpbmcvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9neWstY3JhZnRpbmcvLi9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQb3B1cCB7XG4gICAgdGVtcGxhdGVJZCA9ICdwb3B1cC10ZW1wbGF0ZSc7XG4gICAgc2hvd1BvcHVwKHsgdGl0bGUsIHJlY2lwZVJvd3MsIHRhcmdldEVsIH0pIHtcbiAgICAgICAgLy8gcmVtb3ZlIGV4aXN0aW5nIHBvcHVwXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAnKTtcbiAgICAgICAgaWYgKGV4aXN0aW5nUG9wdXApXG4gICAgICAgICAgICBleGlzdGluZ1BvcHVwLnJlbW92ZSgpO1xuICAgICAgICAvLyBnZW5lcmF0ZSBuZXcgcG9wdXAgdXNpbmcgdGhlIHRlbXBsYXRlIGFuZCBwYXNzZWQgZGF0YVxuICAgICAgICAvLyBUT0RPOiB3aGF0IGlmIHF1ZXJ5U2VsZWN0b3IoKSBpcyBudWxsXG4gICAgICAgIGNvbnN0IHBvcHVwQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMudGVtcGxhdGVJZH1gKT8uY29udGVudC5maXJzdEVsZW1lbnRDaGlsZC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIHBvcHVwQ29udGVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2hlYWRlcicpLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgICAgIGNvbnN0IHBvcHVwQm9keSA9IHBvcHVwQ29udGVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2JvZHknKTtcbiAgICAgICAgLy8gVE9ETzogcmVwbGFjZSBhbnkgd2l0aCB0eXBlXG4gICAgICAgIHJlY2lwZVJvd3MuZm9yRWFjaCgoeCkgPT4ge1xuICAgICAgICAgICAgcG9wdXBCb2R5LmFwcGVuZENoaWxkKHgpO1xuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwb3B1cENvbnRlbnQpO1xuICAgICAgICBwb3B1cENvbnRlbnQuc3R5bGUudG9wID0gdGFyZ2V0RWwub2Zmc2V0VG9wICsgMzQgKyAncHgnO1xuICAgICAgICBwb3B1cENvbnRlbnQuc3R5bGUubGVmdCA9IHRhcmdldEVsLm9mZnNldExlZnQgKyAncHgnO1xuICAgIH1cbiAgICBoaWRlUG9wdXAoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cCcpPy5yZW1vdmUoKTtcbiAgICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlUmVjaXBlUm93KHJlY2lwZSwgc3ByaXRlQ29vcmRzLCBpdGVtVGl0bGVzKSB7XG4gICAgY29uc3QgcmVjaXBlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByZWNpcGVFbC5jbGFzc0xpc3QuYWRkKCdyZWNpcGUnKTtcbiAgICAvLyByZWNpcGUgcmVzdWx0XG4gICAgY29uc3QgcmVzdWx0RWwgPSBjcmVhdGVSZWNpcGVJdGVtKHJlY2lwZS5yZXN1bHQsIHNwcml0ZUNvb3JkcywgaXRlbVRpdGxlcyk7XG4gICAgcmVjaXBlRWwuYXBwZW5kQ2hpbGQocmVzdWx0RWwpO1xuICAgIGNvbnN0IGFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYXJyb3cuY2xhc3NMaXN0LmFkZChcInJlY2lwZV9fYXJyb3dcIik7XG4gICAgYXJyb3cuaW5uZXJIVE1MID0gXCI8c3Bhbj48PTwvc3Bhbj5cIjtcbiAgICByZWNpcGVFbC5hcHBlbmRDaGlsZChhcnJvdyk7XG4gICAgLy8gcmVjaXBlIGluZ3JlZGllbnRzXG4gICAgcmVjaXBlLmluZ3JlZGllbnRzLmZvckVhY2goaW5nID0+IHtcbiAgICAgICAgY29uc3QgaW5nRWwgPSBjcmVhdGVSZWNpcGVJdGVtKGluZywgc3ByaXRlQ29vcmRzLCBpdGVtVGl0bGVzKTtcbiAgICAgICAgaW5nRWwuY2xhc3NMaXN0LmFkZCgnanMtaW5ncmVkaWVudCcsICdjbGlja2FibGUtaW5ncmVkaWVudCcpO1xuICAgICAgICByZWNpcGVFbC5hcHBlbmRDaGlsZChpbmdFbCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlY2lwZUVsO1xufVxuZnVuY3Rpb24gY3JlYXRlUmVjaXBlSXRlbShpdGVtSWQsIHNwcml0ZUNvb3JkcywgaXRlbVRpdGxlcykge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWwuY2xhc3NMaXN0LmFkZCgnaXRlbS1zcHJpdGUnKTtcbiAgICBhZGRTcHJpdGVJY29uKGVsLCBpdGVtSWQsIHNwcml0ZUNvb3Jkcyk7XG4gICAgY29uc3QgaXRlbVRpdGxlID0gaXRlbVRpdGxlc1tpdGVtSWRdIHx8IGl0ZW1JZDtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgaXRlbVRpdGxlKTtcbiAgICBlbC5kYXRhc2V0LmlkID0gaXRlbUlkO1xuICAgIHJldHVybiBlbDtcbn1cbmZ1bmN0aW9uIGFkZFNwcml0ZUljb24oZWwsIGl0ZW1JZCwgc3ByaXRlQ29vcmRzKSB7XG4gICAgY29uc3QgaXRlbVNwcml0ZUNvb3JkcyA9IHNwcml0ZUNvb3Jkc1tpdGVtSWRdO1xuICAgIGlmIChpdGVtU3ByaXRlQ29vcmRzKSB7XG4gICAgICAgIGVsLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9IGl0ZW1TcHJpdGVDb29yZHM7XG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjcmVhdGVSZWNpcGVSb3cgfSBmcm9tICcuL3JlY2lwZXMnO1xuaW1wb3J0IHsgUG9wdXAgfSBmcm9tICcuL3BvcHVwJztcbmltcG9ydCBkYXRhIGZyb20gJy4uL3Jlc3VsdC5qc29uJztcbihhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgLy8gUmVjaXBlcyBkYXRhIGFyZSBoYXJkY29kZWQgc28gZmFyXG4gICAgLy9jb25zdCByZXNwID0gYXdhaXQgZmV0Y2goJy4vcmVzdWx0Lmpzb24nKTtcbiAgICAvL2NvbnN0IGRhdGE6IFJlY2lwZVNvdXJjZURhdGFzZXQgPSBhd2FpdCByZXNwLmpzb24oKTtcbiAgICBjb25zdCBsaXN0RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtbGlzdCcpO1xuICAgIGNvbnN0IHBvcHVwID0gbmV3IFBvcHVwKCk7XG4gICAgZGF0YS5yZWNpcGVzLmZvckVhY2gocmVjaXBlID0+IHtcbiAgICAgICAgY29uc3QgcmVjaXBlUm93ID0gY3JlYXRlUmVjaXBlUm93KHJlY2lwZSwgZGF0YS5zcHJpdGVDb29yZHMsIGRhdGEuaXRlbVRpdGxlcyk7XG4gICAgICAgIGxpc3RFbD8uYXBwZW5kQ2hpbGQocmVjaXBlUm93KTtcbiAgICB9KTtcbiAgICBsaXN0RWw/LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1pbmdyZWRpZW50JykuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgeC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uSW5ncmVkaWVudENsaWNrLmJpbmQobnVsbCwgZGF0YSkpO1xuICAgIH0pO1xuICAgIGxpc3RFbD8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHBvcHVwLmhpZGVQb3B1cCgpO1xuICAgIH0pO1xuICAgIGZ1bmN0aW9uIG9uSW5ncmVkaWVudENsaWNrKGZ1bGxEYXRhU2V0LCBldmVudCkge1xuICAgICAgICBwb3B1cC5oaWRlUG9wdXAoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNvbnN0IHRhcmdldEVsID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBjb25zdCBpbmdJZCA9IHRhcmdldEVsLmRhdGFzZXQuaWQ7XG4gICAgICAgIGlmICghaW5nSWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IHJlY2lwZXNGb3JJdGVtID0gZnVsbERhdGFTZXQucmVjaXBlcy5maWx0ZXIoKHIpID0+IHIucmVzdWx0ID09PSBpbmdJZCk7XG4gICAgICAgIGlmIChyZWNpcGVzRm9ySXRlbS5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IHJlY2lwZVJvd3MgPSByZWNpcGVzRm9ySXRlbS5tYXAoKHgpID0+IGNyZWF0ZVJlY2lwZVJvdyh4LCBmdWxsRGF0YVNldC5zcHJpdGVDb29yZHMsIGZ1bGxEYXRhU2V0Lml0ZW1UaXRsZXMpKTtcbiAgICAgICAgcG9wdXAuc2hvd1BvcHVwKHtcbiAgICAgICAgICAgIHRpdGxlOiBmdWxsRGF0YVNldC5pdGVtVGl0bGVzW2luZ0lkXSxcbiAgICAgICAgICAgIHJlY2lwZVJvd3MsXG4gICAgICAgICAgICB0YXJnZXRFbCxcbiAgICAgICAgfSk7XG4gICAgfVxufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==