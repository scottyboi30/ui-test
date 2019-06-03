/**
  Write a function which accepts 2 parameters:
  -  recipes (the above data structure)
  -  ingredients (String[])

  The function must then filter the recipes list by the ingredients parameter. Returning an array of recipes that contain all of the ingredients provided.
**/

const myRecipes = [
  {
    name: 'bread',
    savoury: true,
    ingredients: [
      'flour',
      'water',
      'yeast'
    ]
  },
  {
    name: 'victoria sponge',
    savoury: false,
    ingredients: [
      'eggs',
      'flour',
      'butter',
      'sugar',
      'jam',
      'cream'
    ]
  }
];

const filterRecipes = (myRecipes, ingredients) => {
  return myRecipes.filter(recipe =>
    ingredients.every(providedIngredient =>
      !!recipe.ingredients.find(ingredient => ingredient === providedIngredient)));
};

export default filterRecipes