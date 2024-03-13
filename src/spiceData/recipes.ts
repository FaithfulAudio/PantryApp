export type Recipe = {
  id: number;
  recipeName: string;
  ingredients: number[];
  instructions: string[];
  imageUrl: string;
};

export const recipes: Recipe[] = [
  {
    id: 1,
    recipeName: 'Agave Lemon Tea',
    ingredients: [1, 186, 119], // Agave nectar, Tea, Lemon grass
    instructions: [
      'Boil 1 cup of water.',
      'Place 1 tea bag in a cup and pour the boiled water over it.',
      'Let the tea steep for 3-5 minutes according to desired strength.',
      'Stir in 1 tablespoon of agave nectar, or adjust to taste.',
      'Add a stalk of lemon grass as a stirrer and for added flavor.',
      'Enjoy hot, or add ice cubes for a refreshing iced tea.',
    ],
    imageUrl:
      'https://my-pantry-app.s3.us-west-2.amazonaws.com/recipes/Agave_lemon_tea.jpg',
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
    imageUrl:
      'https://my-pantry-app.s3.us-west-2.amazonaws.com/recipes/Spicy_tuna_pasta.jpg',
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
    imageUrl:
      'https://my-pantry-app.s3.us-west-2.amazonaws.com/recipes/Almond_Chocolate_Chip_Cookies.jpg',
  },
  {
    id: 4,
    recipeName: 'Classic Basil Pesto Pasta',
    ingredients: [204, 147, 89, 205, 137, 141, 167, 28], // Basil, Pine nuts, Garlic powder, Parmesan cheese, Olive oil, Pasta, Salt, Black pepper
    instructions: [
      'In a food processor, blend fresh basil leaves, pine nuts, garlic powder, and grated Parmesan cheese until smooth.',
      'While blending, slowly add olive oil and season with salt and black pepper to taste.',
      'Cook pasta according to package instructions, drain, and return to pot.',
      'Toss pasta with the pesto sauce, adding pasta water as needed to achieve desired consistency.',
      'Serve immediately, garnished with extra Parmesan cheese and pine nuts.',
    ],
    imageUrl:
      'https://my-pantry-app.s3.us-west-2.amazonaws.com/recipes/Basil_pesto_pasta.jpg',
  },
  {
    id: 5,
    recipeName: 'Hearty Vegetable Lentil Soup',
    ingredients: [121, 47, 206, 207, 138, 89, 196, 25, 167, 28], // Lentils, Canned tomatoes, Carrots, Celery, Onion powder, Garlic powder, Vegetable stock cubes, Bay leaves, Salt, Black pepper
    instructions: [
      'Rinse lentils under cold water.',
      'In a large pot, combine lentils, diced tomatoes, diced carrot, diced celery, onion powder, garlic powder, and vegetable stock cube.',
      'Add water and bay leaves. Bring to a boil.',
      'Reduce heat to simmer, cover, and cook until lentils are tender.',
      'Season with salt and black pepper to taste. Serve hot.',
    ],
    imageUrl:
      'https://my-pantry-app.s3.us-west-2.amazonaws.com/recipes/Vegetable_lengtil_soup.jpg',
  },
  {
    id: 6,
    recipeName: 'Curry Quinoa Salad',
    ingredients: [156, 39, 12, 137, 140, 167, 208, 134], // Quinoa, Canned chickpeas, Apple cider vinegar, Olive oil, Curry powder, Salt, Raisins, Almonds
    instructions: [
      'Cook quinoa according to package instructions, then cool.',
      'In a large bowl, mix cooked quinoa, drained and rinsed chickpeas, apple cider vinegar, olive oil, curry powder, and salt.',
      'Add raisins and sliced almonds. Toss to combine.',
      'Chill in the refrigerator before serving.',
    ],
    imageUrl:
      'https://my-pantry-app.s3.us-west-2.amazonaws.com/recipes/Curry_quinoa_salad.jpg',
  },
  {
    id: 7,
    recipeName: 'Chocolate Avocado Mousse',
    ingredients: [18, 63, 126, 194, 167, 209], // Avocado, Cocoa powder, Maple syrup, Vanilla extract, Salt, Almond milk
    instructions: [
      'Combine ripe avocado flesh, cocoa powder, maple syrup, vanilla extract, salt, and almond milk in a blender.',
      'Blend until smooth and creamy.',
      'Chill in the refrigerator for at least 2 hours before serving.',
      'Garnish with chocolate chips or fresh fruit if desired.',
    ],
    imageUrl:
      'https://my-pantry-app.s3.us-west-2.amazonaws.com/recipes/Chocolate_avocado_mousse.jpg',
  },
  {
    id: 8,
    recipeName: 'Spicy Black Bean Tacos',
    ingredients: [49, 74, 53, 89, 190, 210, 18, 211], // Canned beans, Cumin, Cayenne pepper, Garlic powder, Tortillas, Canned corn, Avocado, Lime
    instructions: [
      'Drain and rinse 1 can of black beans. In a pan, combine beans, cumin, cayenne pepper, and garlic powder. Cook over medium heat for 5-7 minutes.',
      'Warm corn tortillas in a skillet or microwave.',
      'Mash 1 ripe avocado and mix with lime juice and salt to taste.',
      'Assemble tacos with the bean mixture, a spoonful of mashed avocado, and canned corn.',
      'Serve with additional toppings if desired.',
    ],
    imageUrl:
      'https://my-pantry-app.s3.us-west-2.amazonaws.com/recipes/Spicy_bean_tacos.jpg',
  },
  {
    id: 9,
    recipeName: 'Classic Chicken Caesar Salad',
    ingredients: [236, 313, 268, 304, 312, 28, 233], // Chicken Breast, Romaine Lettuce, Caesar dressing, Croutons, Parmesan cheese, Lemon, Black Pepper
    instructions: [
      'Grill or pan-fry chicken breast seasoned with black pepper; slice thinly.',
      'Toss chopped romaine lettuce in Caesar dressing.',
      'Top with chicken, croutons, shaved Parmesan, and lemon juice.',
      'Serve chilled.',
    ],
    imageUrl:
      'https://my-pantry-app.s3.us-west-2.amazonaws.com/recipes/Chicken_ceasar_salad.jpg',
  },
  {
    id: 10,
    recipeName: 'Avocado Toast with Poached Eggs',
    ingredients: [31, 235, 213, 167, 28, 285], // Bread, Avocado, Eggs, Salt, Pepper, Tomatoes
    instructions: [
      'Toast bread.',
      'Mash avocado with salt and pepper; spread on toast.',
      'Poach eggs and place on top.',
      'Garnish with tomatoes.',
    ],
    imageUrl:
      'https://my-pantry-app.s3.us-west-2.amazonaws.com/recipes/Avocado_toast_poached_eggs.jpg',
  },
  {
    id: 11,
    recipeName: 'Berry Smoothie',
    ingredients: [232, 265, 102, 209, 278], // Mixed Berries, Greek Yogurt, Honey, Almond Milk, Ice
    instructions: [
      'Blend berries, Greek yogurt, honey, almond milk, and ice.',
      'Serve in a tall glass.',
    ],
    imageUrl:
      'https://my-pantry-app.s3.us-west-2.amazonaws.com/recipes/Berry_smoothie.jpg',
  },
  {
    id: 12,
    recipeName: 'Beef Stir-Fry with Broccoli',
    ingredients: [237, 221, 257, 89, 137, 158, 171, 167, 28], // Beef, Broccoli, Soy sauce, Sesame oil, Rice, Bell Peppers, Garlic, Black Pepper
    instructions: [
      'Cook rice.',
      'Brown beef with seasoning; add broccoli.',
      'Stir in soy sauce and sesame oil.',
      'Serve over rice.',
    ],
    imageUrl:
      'https://my-pantry-app.s3.us-west-2.amazonaws.com/recipes/Beef_stir_fry.jpg',
  },
  {
    id: 13,
    recipeName: 'Mango and Shrimp Tacos',
    ingredients: [241, 282, 235, 211, 314, 315, 190, 167, 58], // Shrimp, Mango, Avocado, Cilantro, Lime, Red Onion, Tortillas, Salt, Garlic powder
    instructions: [
      'Marinate shrimp; cook.',
      'Mix mango, avocado, cilantro, and lime.',
      'Warm tortillas.',
      'Assemble tacos with shrimp and salsa.',
    ],
    imageUrl:
      'https://my-pantry-app.s3.us-west-2.amazonaws.com/recipes/Mango_shrimp_tacos.jpg',
  },
  {
    id: 14,
    recipeName: 'Spicy Tofu Stir-Fry',
    ingredients: [242, 320, 224, 174, 12, 104], // Tofu, Jalapeños, Bell Peppers, Soy sauce, Apple cider vinegar, Hot sauce
    instructions: [
      'Press the tofu to drain excess water and cut into cubes.',
      'Heat oil in a pan over medium-high heat. Add tofu cubes and fry until golden brown. Remove tofu and set aside.',
      'In the same pan, add sliced bell peppers and jalapeños. Stir-fry for a few minutes until vegetables are slightly tender.',
      'Mix 2 tablespoons of soy sauce, 1 tablespoon of apple cider vinegar, and 1 teaspoon of hot sauce in a small bowl.',
      'Add the fried tofu back to the pan with the vegetables. Pour the sauce mixture over the tofu and vegetables. Stir well to combine.',
      'Cook for another 2-3 minutes, then serve hot with rice.',
    ],
    imageUrl:
      'https://my-pantry-app.s3.us-west-2.amazonaws.com/recipes/Spicy_tofu_stir_fry.jpg',
  },
  {
    id: 15,
    recipeName: 'Sushi Rice Bowls',
    ingredients: [158, 325, 169, 224, 174, 12], // Rice, Sushi-grade Salmon, Seaweed, Bell Peppers, Soy sauce, Apple cider vinegar
    instructions: [
      'Cook rice according to package instructions.',
      'In a small bowl, mix 2 tablespoons of apple cider vinegar with 1 teaspoon of sugar and a pinch of salt. Stir into the cooked rice and let cool.',
      'Dice the sushi-grade salmon into small pieces.',
      'Cut bell peppers and seaweed into thin strips.',
      'Assemble the bowls by placing a serving of sushi rice at the bottom. Top with salmon, bell peppers, and seaweed.',
      'Drizzle soy sauce over the top and serve.',
    ],
    imageUrl:
      'https://my-pantry-app.s3.us-west-2.amazonaws.com/recipes/Sushi_rice_bowls.jpg',
  },
  {
    id: 16,
    recipeName: 'Chicken Teriyaki',
    ingredients: [236, 174, 197, 12, 93], // Chicken Breast, Soy sauce, Vinegar, Apple cider vinegar, Granulated sugar
    instructions: [
      'Cut the chicken breast into bite-sized pieces.',
      'In a bowl, mix 1/4 cup soy sauce, 2 tablespoons vinegar, 1 tablespoon apple cider vinegar, and 2 tablespoons granulated sugar to make the teriyaki sauce.',
      "Heat a pan over medium heat and add the chicken. Cook until it's no longer pink.",
      'Pour the teriyaki sauce over the chicken and simmer until the sauce thickens and coats the chicken well.',
      'Serve hot with steamed rice and garnish with sesame seeds.',
    ],
    imageUrl:
      'https://my-pantry-app.s3.us-west-2.amazonaws.com/recipes/Chicken_teriyaki.jpg',
  },
  {
    id: 17,
    recipeName: 'Spicy Ramen Noodles',
    ingredients: [157, 84, 104, 321, 170], // Ramen noodles, Fish sauce, Hot sauce, Jalapeños, Semolina flour (for homemade noodles)
    instructions: [
      'Cook ramen noodles according to package instructions. Drain and set aside.',
      'In a pot, bring 4 cups of water to a boil. Add 2 tablespoons of fish sauce and 1-2 teaspoons of hot sauce, depending on your spice preference.',
      'Add sliced jalapeños to the broth and simmer for 5 minutes.',
      'Place cooked noodles in a bowl. Pour the spicy broth over the noodles.',
      'Garnish with green onions and serve hot.',
    ],
    imageUrl:
      'https://my-pantry-app.s3.us-west-2.amazonaws.com/recipes/Spicy_ramen_noodles.jpg',
  },
  {
    id: 18,
    recipeName: 'Vegetable Spring Rolls',
    ingredients: [222, 223, 224, 169, 173], // Carrots, Cucumbers, Bell Peppers, Seaweed, Soba noodles
    instructions: [
      'Julienne carrots, cucumbers, and bell peppers. Set aside.',
      'Cook soba noodles according to package instructions, rinse under cold water, and drain.',
      'Soak rice paper wrappers in warm water until they are soft and pliable.',
      'Lay out the softened wrappers and place a small amount of noodles, carrots, cucumbers, bell peppers, and a piece of seaweed on each wrapper.',
      'Roll the wrappers tightly, tucking in the sides as you roll.',
      'Serve with a dipping sauce made from soy sauce, vinegar, and a touch of sugar.',
    ],
    imageUrl:
      'https://my-pantry-app.s3.us-west-2.amazonaws.com/recipes/Vegetable_spring_rolls.jpg',
  },
  {
    id: 19,
    recipeName: 'Classic Guacamole',
    ingredients: [235, 320, 315, 197, 12], // Avocados, Jalapeños, Red Onion, Vinegar, Apple cider vinegar
    instructions: [
      'Halve the avocados and remove the pits. Scoop the avocado flesh into a bowl.',
      'Finely chop the jalapeños and red onion, and add to the bowl.',
      'Add a splash of vinegar and apple cider vinegar to the mixture.',
      'Mash the ingredients together with a fork, leaving some chunks for texture.',
      'Season with salt to taste and serve with tortilla chips.',
    ],
    imageUrl:
      'https://my-pantry-app.s3.us-west-2.amazonaws.com/recipes/Classic_guacamole.jpg',
  },
  {
    id: 20,
    recipeName: 'Chicken Enchiladas',
    ingredients: [236, 47, 303, 12, 223], // Chicken Breast, Canned tomatoes, Salsa Verde, Apple cider vinegar, Cucumbers (as a side salad)
    instructions: [
      'Preheat the oven to 375°F (190°C).',
      'Cook the chicken breast and shred it with two forks.',
      'In a saucepan, combine canned tomatoes, salsa verde, and a splash of apple cider vinegar. Simmer to make the enchilada sauce.',
      'Dip tortillas in the sauce, then fill with shredded chicken and roll up. Place in a baking dish.',
      'Pour remaining sauce over the enchiladas and sprinkle with cheese.',
      'Bake for 20-25 minutes until bubbly. Serve with a cucumber side salad.',
    ],
    imageUrl:
      'https://my-pantry-app.s3.us-west-2.amazonaws.com/recipes/Chicken_enchiladas.jpg',
  },
  {
    id: 21,
    recipeName: 'Beef Tacos',
    ingredients: [237, 320, 166, 190, 315], // Ground Beef, Jalapeños, Salsa, Tortillas, Red Onion
    instructions: [
      'Cook ground beef in a skillet over medium heat until browned. Drain excess fat.',
      'Add chopped jalapeños and some salsa to the beef. Cook for a few more minutes until flavorful.',
      'Warm tortillas in a dry pan or in the oven wrapped in foil.',
      'Assemble tacos by spooning beef mixture onto tortillas. Top with diced red onion and additional salsa.',
      'Serve with lime wedges on the side.',
    ],
    imageUrl:
      'https://my-pantry-app.s3.us-west-2.amazonaws.com/recipes/Beef_tacos.jpg',
  },
  {
    id: 22,
    recipeName: 'Quesadillas with Cheese and Peppers',
    ingredients: [224, 333, 190], // Bell Peppers, Sliced Provolone Cheese, Tortillas
    instructions: [
      'Slice bell peppers into thin strips.',
      'Place a tortilla on a hot skillet, layer with sliced provolone cheese and bell peppers, then top with another tortilla.',
      'Cook until the tortilla is golden brown and crispy, then flip carefully to cook the other side.',
      'Remove from the skillet and cut into wedges. Serve hot.',
    ],
    imageUrl:
      'https://my-pantry-app.s3.us-west-2.amazonaws.com/recipes/Quesadillas_cheese_peppers.jpg',
  },
  {
    id: 23,
    recipeName: 'Churros with Chocolate Sauce',
    ingredients: [3, 105, 200, 197, 63], // All-purpose flour, Icing sugar, White Sugar, Vinegar, Cocoa powder
    instructions: [
      'Mix 1 cup of water, 2 tablespoons white sugar, a half teaspoon of salt, and 2 tablespoons of vegetable oil in a saucepan over medium heat. Bring to a boil and remove from heat. Stir in 1 cup all-purpose flour until a dough forms.',
      'Heat oil for frying in a deep fryer or deep pan to 375°F (190°C).',
      'Pipe strips of dough into the hot oil using a pastry bag. Fry until golden; drain on paper towels.',
      'Prepare the chocolate sauce by heating 1 cup of water, adding 1/2 cup cocoa powder, a splash of vinegar, and sweeten with icing sugar to taste. Stir until smooth.',
      'Serve churros with warm chocolate sauce for dipping.',
    ],
    imageUrl:
      'https://my-pantry-app.s3.us-west-2.amazonaws.com/recipes/Churros_chocolate_sauce.jpg',
  },
  {
    id: 24,
    recipeName: 'Classic Cheeseburger',
    ingredients: [237, 214, 299, 225, 118, 167, 28], // Ground Beef, Butter, Sliced Cheese, Tomatoes, Ketchup, Salt, Black pepper
    instructions: [
      'Form patties from ground beef and season with salt and pepper.',
      'Heat a skillet over medium-high heat and melt butter. Cook the patties to your preferred doneness.',
      'Place a slice of cheese on each patty during the last minute of cooking to melt.',
      'Assemble the burgers by placing a patty on a toasted bun, adding a slice of tomato, and topping with ketchup.',
      'Serve with a side of crispy fries.',
    ],
    imageUrl:
      'https://my-pantry-app.s3.us-west-2.amazonaws.com/recipes/Cheeseburger.jpg',
  },
  {
    id: 25,
    recipeName: 'BBQ Pulled Pork Sandwich',
    ingredients: [328, 202, 189, 167, 28], // Pork Belly, Worcestershire sauce, Tortilla chips (as a side), Salt, Black pepper
    instructions: [
      'Slow cook pork belly with Worcestershire sauce, salt, and pepper in a slow cooker until tender.',
      'Shred the pork using two forks and mix with BBQ sauce.',
      'Serve the pulled pork on a soft bun with coleslaw and pickles.',
      'Accompany with a side of tortilla chips.',
    ],
    imageUrl:
      'https://my-pantry-app.s3.us-west-2.amazonaws.com/recipes/BBQ_pulled_pork_sandwich.jpg',
  },
  {
    id: 26,
    recipeName: 'Macaroni and Cheese',
    ingredients: [349, 267, 334, 3, 167], // Elbow Macaroni, Mozzarella Cheese, Unsalted Butter, All-purpose flour, Salt
    instructions: [
      'Cook elbow macaroni according to package instructions. Drain.',
      'In a saucepan, melt unsalted butter over medium heat. Stir in all-purpose flour to create a roux.',
      'Gradually add milk, stirring continuously until the mixture thickens.',
      'Remove from heat and add grated mozzarella cheese, stirring until melted.',
      'Combine the cheese sauce with the cooked macaroni. Serve hot.',
    ],
    imageUrl:
      'https://my-pantry-app.s3.us-west-2.amazonaws.com/recipes/Macaroni_and_cheese.jpg',
  },
  {
    id: 27,
    recipeName: 'Fried Chicken',
    ingredients: [236, 3, 69, 28, 167], // Chicken Breast, All-purpose flour, Cornmeal, Black pepper, Salt
    instructions: [
      'Cut chicken breast into strips. Season with salt and black pepper.',
      'Dredge the chicken strips in all-purpose flour mixed with cornmeal.',
      'Heat oil in a deep fryer or large skillet to 375°F (190°C). Fry the chicken strips until golden brown and cooked through.',
      'Serve with a side of mashed potatoes and gravy.',
    ],
    imageUrl:
      'https://my-pantry-app.s3.us-west-2.amazonaws.com/recipes/Fried_chicken.jpg',
  },
  {
    id: 28,
    recipeName: 'Apple Pie',
    ingredients: [228, 3, 194, 93, 95, 167], // Apples, All-purpose flour, Vanilla extract, Granulated sugar, Ground cloves, Salt
    instructions: [
      'Peel, core, and slice apples. Toss with granulated sugar, a little ground cloves, and vanilla extract.',
      'Prepare pie crust with all-purpose flour. Fill with the apple mixture.',
      'Cover with a top crust, seal edges, and cut slits in the top.',
      'Bake in a preheated oven at 375°F (190°C) for about 50 minutes, or until crust is golden brown.',
      'Serve warm with vanilla ice cream.',
    ],
    imageUrl:
      'https://my-pantry-app.s3.us-west-2.amazonaws.com/recipes/Apple_pie.jpg',
  },
  {
    id: 366,
    recipeName: 'Beef Stroganoff',
    ingredients: [237, 3, 267, 218, 194, 167, 28, 351], // Ground Beef, All-purpose flour, Mozzarella Cheese, Sour Cream, Vanilla Extract (as a substitute for a dash of sweetness in lieu of sugar), Salt, Black Pepper, Egg Noodles
    instructions: [
      'Brown ground beef in a skillet, season with salt and pepper. Remove and set aside.',
      'In the same skillet, add all-purpose flour to the beef drippings to make a roux.',
      'Slowly whisk in beef broth until smooth. Bring to a simmer until thickened.',
      'Stir in sour cream and mozzarella cheese until creamy.',
      'Return the beef to the skillet, heat through. Serve over cooked egg noodles.',
    ],
    imageUrl:
      'https://my-pantry-app.s3.us-west-2.amazonaws.com/recipes/Beef_stroganoff.jpg',
  },
  {
    id: 367,
    recipeName: 'Ratatouille',
    ingredients: [225, 224, 207, 227, 197, 167, 28], // Tomatoes, Bell Peppers, Celery, Mushrooms, Vinegar, Salt, Black Pepper
    instructions: [
      'Chop tomatoes, bell peppers, celery, and mushrooms into bite-sized pieces.',
      'Heat olive oil in a large pan. Add the vegetables and cook until they are soft.',
      'Season with salt, black pepper, and a splash of vinegar for acidity.',
      'Simmer on low heat for 30 minutes until the vegetables are tender and the flavors meld.',
      'Serve hot as a side dish or over cooked rice for a main course.',
    ],
    imageUrl:
      'https://my-pantry-app.s3.us-west-2.amazonaws.com/recipes/Ratatouille.jpg',
  },
  {
    id: 368,
    recipeName: 'Spaghetti Carbonara',
    ingredients: [141, 238, 213, 267, 167, 28], // Pasta, Bacon, Eggs, Mozzarella Cheese (as a substitute for Pecorino), Salt, Black Pepper
    instructions: [
      'Cook spaghetti pasta in boiling salted water until al dente. Reserve some pasta water.',
      'In a pan, cook chopped bacon until crispy. Remove bacon and drain fat, leaving a small amount in the pan.',
      'Whisk eggs, grated mozzarella cheese, salt, and black pepper in a bowl.',
      'Add cooked pasta to the pan with bacon. Remove from heat and quickly mix in the egg and cheese mixture, adding pasta water as needed to create a creamy sauce.',
      'Serve immediately, garnished with additional cheese and black pepper.',
    ],
    imageUrl:
      'https://my-pantry-app.s3.us-west-2.amazonaws.com/recipes/Spaghetti_carbonara.jpg',
  },
  {
    id: 369,
    recipeName: 'French Onion Soup',
    ingredients: [138, 33, 214, 197, 167, 28, 299], // Onion Powder, Broth or Stock, Butter, Vinegar, Salt, Black Pepper, Sliced Cheese
    instructions: [
      'In a large pot, melt butter and add onion powder to taste, cooking until onions are caramelized.',
      'Add broth or stock and a splash of vinegar, and bring to a simmer. Season with salt and black pepper.',
      'Pour soup into oven-safe bowls. Top with a slice of cheese.',
      'Broil in the oven until the cheese is bubbly and golden brown.',
      'Serve hot with crusty bread on the side.',
    ],
    imageUrl:
      'https://my-pantry-app.s3.us-west-2.amazonaws.com/recipes/French_onion_soup.jpg',
  },
];
