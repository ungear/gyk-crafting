export type Recipe = {
  result: string,
  ingredients: string[]
}

export type SpriteCoordsMap = {
  [key: string]: string;
}

export type ItemTitlesMap = {
  [key: string]: string;
}

export type RecipeSourceDataset = {
  recipes: Recipe[],
  spriteCoords: SpriteCoordsMap,
  itemTitles: ItemTitlesMap
}