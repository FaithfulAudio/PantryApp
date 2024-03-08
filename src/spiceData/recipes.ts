export const recipes = [
  {
    id: 1,
    recipeName: 'Agave Lemon Tea',
    ingredients: [1, 186, 119], // Agave nectar, Tea, Lemon grass
    instructions: [
      'Boil 1 cup of water and add it to a cup with 1 tea bag.',
      'Steep the tea for 3-5 minutes depending on desired strength.',
      'Stir in 1 tablespoon of agave nectar, or to taste.',
      'Add a stalk of lemon grass as a stirrer and for added flavor.',
      'Enjoy hot, or add ice cubes for a refreshing iced tea.',
    ],
  },
  {
    id: 2,
    recipeName: 'Spicy Tuna Pasta',
    ingredients: [48, 141, 137, 58, 89], // Canned tuna, Pasta, Olives, Chili powder, Garlic powder
    instructions: [
      'Cook 8 ounces of pasta according to package instructions, then drain and set aside.',
      'In a skillet, heat 2 tablespoons of olive oil over medium heat. Add 1 teaspoon garlic powder and 1 teaspoon chili powder, stirring for about 1 minute.',
      'Add one can (about 5 ounces) of drained tuna and 1/2 cup of sliced olives to the skillet, breaking up the tuna as it cooks.',
      'Toss the cooked pasta with the tuna mixture until well combined.',
      'Serve hot, garnished with fresh herbs if desired.',
    ],
  },
  {
    id: 3,
    recipeName: 'Almond Chocolate Chip Cookies',
    ingredients: [5, 3, 21, 60, 194, 93], // Almond butter, All-purpose flour, Baking soda, Chocolate chips, Vanilla extract, Granulated sugar
    instructions: [
      'Preheat your oven to 350°F (175°C).',
      'In a large bowl, mix 3/4 cup almond butter, 1/2 cup granulated sugar, and 1 teaspoon vanilla extract until smooth.',
      'In another bowl, whisk together 1 cup all-purpose flour and 1/2 teaspoon baking soda.',
      'Gradually mix the dry ingredients into the wet ingredients, then fold in 1/2 cup chocolate chips.',
      'Scoop tablespoon-sized balls of dough onto a baking sheet lined with parchment paper, spacing them about 2 inches apart.',
      'Bake for 10-12 minutes or until the edges are golden brown.',
      'Allow to cool on the baking sheet for a few minutes before transferring to a wire rack to cool completely.',
    ],
  },
];

export const imageMapRecipes = {
  1: require('../assets/recipe1.jpeg'),
  2: require('../assets/recipe2.jpeg'),
  3: require('../assets/recipe3.jpeg'),
};
