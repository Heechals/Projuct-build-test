// This is a one-time script to populate the Firestore database with initial recipe data.
// You would run this once from your browser's developer console on any page that has the Firebase SDK included,
// like recipes.html, after you have configured your firebase-config.js.

const recipesTo_add = [
    {
        id: 'bibimbap',
        name: 'Bibimbap',
        imageUrl: 'https://i.pinimg.com/1200x/32/b9/5f/32b95fc5d05e88ba409c5f26a3e70066.jpg',
        description: 'A signature Korean dish, Bibimbap is a delicious mix of rice, assorted vegetables, savory meat, and a spicy gochujang sauce, often topped with a fried egg.',
        characteristics: 'Bibimbap is a signature Korean dish served as a bowl of warm white rice topped with namul (sautéed and seasoned vegetables) and gochujang (chili pepper paste), soy sauce, or doenjang (a fermented soybean paste). A raw or fried egg and sliced meat (usually beef) are common additions. The ingredients are stirred together thoroughly just before eating. It is a dish that is as visually appealing as it is delicious, with a beautiful harmony of colorful ingredients, making it a well-balanced and nutritious meal.',
        ingredients: [
            '2 bowls of cooked rice',
            '1 bunch of spinach, 200g of bean sprouts',
            '1 carrot, 1/2 zucchini',
            '150g of beef (or other toppings)',
            '2 eggs',
            'Sauce: 3 tbsp Gochujang, 1 tbsp sugar, 1 tsp minced garlic, 1 tbsp sesame oil, 1 tsp vinegar, sesame seeds'
        ],
        recipe: [
            'Blanch the vegetables (spinach, bean sprouts), season with salt and sesame oil. Sauté the julienned carrot and zucchini lightly.',
            'Marinate and stir-fry the beef with soy sauce, sugar, and minced garlic.',
            'Prepare fried eggs or make egg garnish (jidan).',
            'Place the cooked rice in a bowl and arrange the prepared ingredients beautifully on top.',
            'Add the sauce in the center and drizzle with sesame oil.',
            'Mix all the ingredients together right before eating.'
        ]
    },
    {
        id: 'bulgogi',
        name: 'Bulgogi',
        imageUrl: 'https://i.pinimg.com/1200x/20/ae/b9/20aeb917d02402b0bee80ab56ea36256.jpg',
        description: 'Thinly sliced, marinated beef grilled to perfection. Bulgogi is known for its sweet and savory flavor profile, making it a favorite for all ages.',
        characteristics: 'Bulgogi, literally "fire meat", is a classic Korean BBQ dish made of thin, marinated slices of beef or pork grilled on a barbecue or on a stove-top griddle. It is known for its tender texture and a perfect balance of sweet and savory flavors from its soy sauce-based marinade. Bulgogi is a favorite among Koreans and non-Koreans alike. There are various regional styles, such as Seoul-style (with broth) and Gwangyang-style (quickly grilled over charcoal). It\'s typically enjoyed wrapped in lettuce or perilla leaves.',
        ingredients: [
            '600g of thinly sliced beef for Bulgogi',
            '1/2 onion, 1 green onion',
            'Shiitake or enoki mushrooms',
            'Marinade: 7 tbsp soy sauce, 3 tbsp sugar, 2 tbsp minced garlic, 2 tbsp sesame oil, a pinch of black pepper',
            '(Optional) 1/2 cup of pear juice, glass noodles'
        ],
        recipe: [
            'Pat the beef dry with a kitchen towel to remove excess blood.',
            'In a bowl, mix together soy sauce, sugar, minced garlic, sesame oil, and black pepper to create the marinade. (Adding pear juice will help tenderize the meat.)',
            'Add the beef to the marinade, mix well, and let it sit for at least 30 minutes.',
            'Slice the onion, green onion, and mushrooms.',
            'In a heated pan, stir-fry the marinated beef. When the meat starts to cook, add the prepared vegetables and continue to stir-fry.',
            'Once all ingredients are fully cooked, it\'s ready. Enjoy with warm rice.'
        ]
    },
    {
        id: 'kimchi-jjigae',
        name: 'Kimchi Jjigae (Kimchi Stew)',
        imageUrl: 'https://i.pinimg.com/736x/4f/fd/e7/4ffde7cca42fd455be18ecd5a3b026cc.jpg',
        description: 'A classic Korean stew made with aged kimchi, tofu, and pork or seafood. It\'s a comforting and flavorful dish, perfect for a cold day.',
        characteristics: 'Kimchi Jjigae is a classic Korean stew made with well-fermented kimchi, pork, and tofu. It\'s known for its deep, spicy, and savory flavors that come from the aged kimchi. As one of the most beloved comfort foods in Korea, its taste can vary widely depending on the additional ingredients. It\'s typically served hot with a side of rice, and its flavor deepens the longer it\'s simmered.',
        ingredients: [
            '1/4 head of sour kimchi (300g)',
            '200g of pork (shoulder or belly)',
            '1/2 block of tofu',
            '1/2 green onion',
            '3 cups of water or anchovy broth',
            'Seasoning: 2 tbsp red pepper flakes (gochugaru), 1 tbsp minced garlic, 1 tbsp sugar (if kimchi is very sour), 1 tbsp soy sauce or salted shrimp'
        ],
        recipe: [
            'Cut the pork and kimchi into bite-sized pieces. Slice the green onion and tofu.',
            'In a heated pot with a little oil, stir-fry the pork. When the surface is cooked, add the kimchi and continue to stir-fry.',
            'Pour in the water or broth and add all the seasoning ingredients (red pepper flakes, minced garlic, sugar, soy sauce).',
            'Once the stew boils, reduce the heat to medium and simmer for at least 15 minutes to let the flavors meld.',
            'Finally, add the tofu and green onion, and cook for another 2-3 minutes before serving.'
        ]
    },
    {
        id: 'doenjang-jjigae',
        name: 'Doenjang Jjigae (Soybean Paste Stew)',
        imageUrl: 'https://i.pinimg.com/736x/82/8c/63/828c6347fde4fc262c773e19a216db98.jpg',
        description: 'A rich and savory stew made with fermented soybean paste (doenjang), tofu, and various vegetables. A staple in Korean cuisine.',
        characteristics: 'Doenjang Jjigae is a staple Korean stew, often referred to as a "soul food" for its comforting and rich flavors. Made with doenjang (fermented soybean paste) as its primary ingredient, it has a distinctively savory and deep taste. The flavor profile can be easily varied by adding different ingredients. It\'s commonly cooked with basic vegetables like tofu, zucchini, and onion, along with seafood or meat, and is typically served bubbling hot in an earthenware pot.',
        ingredients: [
            '3 tbsp doenjang (fermented soybean paste)',
            '4 cups of water or anchovy broth',
            '1/2 block of tofu, 1/3 zucchini, 1/2 onion',
            '(Optional) 1 potato, 1 chili pepper, 1 tbsp minced garlic',
            '(Optional) Beef brisket, clams, or other meat/seafood'
        ],
        recipe: [
            'In a pot, dissolve the doenjang in water or broth and bring to a boil. (If using meat, stir-fry the meat first before adding the broth.)',
            'Once the broth is boiling, add hard vegetables like potatoes and onions.',
            'When the vegetables are partially cooked, add softer ingredients like zucchini and tofu.',
            'When all ingredients are cooked, add minced garlic, chili pepper, and green onion, and boil for another minute to finish.',
            'Serve hot in an earthenware pot with a side of rice.'
        ]
    },
    {
        id: 'jajangmyeon',
        name: 'Jajangmyeon (Black Bean Noodles)',
        imageUrl: 'https://i.pinimg.com/736x/6f/32/50/6f32502bce814de3b37ab96d4cd6bfc4.jpg',
        description: 'A popular Korean-Chinese noodle dish topped with a thick sauce made of chunjang, diced pork, and vegetables.',
        characteristics: 'Jajangmyeon is a popular Korean-Chinese noodle dish topped with a thick sauce made of chunjang (a salty black soybean paste), diced pork, and vegetables. It\'s known for its deep, savory, and slightly sweet flavor. As it\'s not spicy, it\'s a favorite among people of all ages. There are many variations, such as Gan-jjajang and Jaengban-jjajang. In Korea, it\'s often eaten on special occasions like graduations and moving days.',
        ingredients: [
            '2 servings of fresh noodles or kalguksu noodles',
            '100g pork, 1 onion, 1/2 zucchini',
            'Jajang Sauce: 2 tbsp roasted chunjang, 1 tbsp minced garlic, 1 tbsp sugar, 1 tbsp oyster sauce, 1 tbsp soy sauce, starch water',
            '(Optional) Cucumber, peas, fried egg'
        ],
        recipe: [
            'Dice the pork and vegetables (onion, zucchini).',
            'In a heated pan with oil, stir-fry the minced garlic and pork. When the pork is cooked, add the vegetables and stir-fry together.',
            'When the vegetables start to become translucent, add the chunjang and stir-fry thoroughly over low heat to prevent burning.',
            'Add sugar, oyster sauce, and soy sauce, then pour in a small amount of water and bring to a boil.',
            'Once the sauce is boiling, gradually add starch water to thicken it to your desired consistency.',
            'Pour the Jajang sauce over boiled noodles and top with optional cucumber slices or a fried egg to finish.'
        ]
    }
];

// Function to add all recipes to Firestore
function populateDatabase() {
    const batch = db.batch();
    recipesTo_add.forEach(recipe => {
        const docRef = db.collection("recipes").doc(recipe.id);
        batch.set(docRef, recipe);
    });

    batch.commit().then(() => {
        console.log("Successfully populated the database with initial recipes!");
    }).catch((error) => {
        console.error("Error populating database: ", error);
    });
}

// To run this, open your browser's developer console and call populateDatabase();
