// This script is for one-time use to populate the Firestore database with initial recipe data.
// To run this script, open the browser's developer console on any page of the website and paste the contents of this file.

const recipesTo_ADD = [
    {
        id: 'bibimbap',
        name: 'Bibimbap',
        imageUrl: 'https://image.nanobanana.dev/food/bibimbap',
        description: 'A signature Korean dish, bibimbap is a colorful bowl of rice topped with fresh vegetables, a fried egg, and your choice of protein. It\'s all mixed together with a dollop of spicy gochujang sauce.',
        characteristics: 'A vibrant and healthy mixed rice dish with a perfect balance of flavors and textures, from the fresh crunch of vegetables to the savory depth of the sauce.',
        ingredients: [
            '1 cup cooked rice',
            '1/2 cup assorted vegetables (carrots, spinach, bean sprouts)',
            '100g beef or tofu',
            '1 fried egg',
            '1 tbsp gochujang (Korean chili paste)'
        ],
        recipe: [
            '1. Sauté the vegetables and protein separately.',
            '2. Arrange the cooked rice, vegetables, and protein in a bowl.',
            '3. Top with a sunny-side-up fried egg.',
            '4. Serve with gochujang on the side, ready to be mixed.'
        ]
    },
    {
        id: 'bulgogi',
        name: 'Bulgogi',
        imageUrl: 'https://image.nanobanana.dev/food/bulgogi',
        description: 'Thinly sliced beef marinated in a sweet and savory sauce, then grilled to perfection. Bulgogi is a beloved Korean BBQ dish known for its tender texture and irresistible flavor.',
        characteristics: 'Tender, juicy, and slightly sweet marinated beef that melts in your mouth. The grilling process adds a delightful smoky aroma.',
        ingredients: [
            '200g thinly sliced beef',
            '4 tbsp soy sauce',
            '2 tbsp sugar',
            '1 tbsp sesame oil',
            '1/2 pear, grated (for tenderizing)'
        ],
        recipe: [
            '1. Marinate the beef slices in the soy sauce mixture for at least 30 minutes.',
            '2. Grill the marinated beef over high heat until cooked through and slightly caramelized.',
            '3. Serve hot with a side of rice and fresh lettuce for wrapping.'
        ]
    },
    {
        id: 'kimchi-jjigae',
        name: 'Kimchi Jjigae',
        imageUrl: 'https://image.nanobanana.dev/food/kimchi-jjigae',
        description: 'A fiery and comforting stew made with aged kimchi, tofu, and pork belly. Kimchi jjigae is a staple in Korean households, perfect for a cold day.',
        characteristics: 'A robust and spicy stew with a deep, complex flavor from the fermented kimchi. The pork adds richness, while the tofu provides a soft contrast.',
        ingredients: [
            '1 cup aged kimchi',
            '100g pork belly, sliced',
            '1/2 block of tofu, sliced',
            '1 cup water or anchovy broth',
            '1 tsp gochugaru (Korean chili flakes)'
        ],
        recipe: [
            '1. Sauté the kimchi and pork belly in a pot until the pork is cooked.',
            '2. Add water or broth and bring to a boil.',
            '3. Add tofu and gochugaru, then simmer for 15-20 minutes.',
            '4. Serve bubbling hot with a bowl of rice.'
        ]
    },
    {
        id: 'doenjang-jjigae',
        name: 'Doenjang Jjigae',
        imageUrl: 'https://image.nanobanana.dev/food/doenjang-jjigae',
        description: 'A savory and earthy stew made with doenjang (fermented soybean paste). It\'s a classic Korean comfort food, often filled with tofu, clams, and vegetables.',
        characteristics: 'A deeply savory and slightly pungent stew with a comforting, rustic flavor. It\'s less spicy than kimchi jjigae but equally satisfying.',
        ingredients: [
            '2 tbsp doenjang (fermented soybean paste)',
            '100g clams or small shrimp',
            '1/2 block of tofu, cubed',
            '1/2 zucchini, sliced',
            '2 cups water'
        ],
        recipe: [
            '1. Bring the water to a boil and dissolve the doenjang paste.',
            '2. Add the clams and vegetables, and cook until the clams open.',
            '3. Add the tofu and simmer for another 5-10 minutes.',
            '4. Serve hot as a communal stew.'
        ]
    },
    {
        id: 'jajangmyeon',
        name: 'Jajangmyeon',
        imageUrl: 'https://image.nanobanana.dev/food/jajangmyeon',
        description: 'A popular Korean-Chinese noodle dish topped with a thick, savory black bean sauce. The sauce is made with chunjang (a sweet soybean paste), diced pork, and vegetables.',
        characteristics: 'A rich, savory, and slightly sweet noodle dish. The thick, dark sauce coats the chewy noodles perfectly, making for a satisfying meal.',
        ingredients: [
            '200g fresh noodles',
            '100g diced pork',
            '1/2 cup chunjang (black bean paste)',
            '1 cup diced vegetables (onions, potatoes, zucchini)',
            '1 tbsp sugar'
        ],
        recipe: [
            '1. Stir-fry the diced pork and vegetables until cooked.',
            '2. Add the chunjang paste and sugar, and stir-fry for a few more minutes.',
            '3. Add a little water to create a thick sauce and simmer.',
            '4. Cook the noodles, drain, and top with the black bean sauce.'
        ]
    }
];

function populateDatabase() {
    const batch = db.batch();

    recipesTo_ADD.forEach(recipe => {
        const docRef = db.collection("recipes").doc(recipe.id);
        batch.set(docRef, {
            name: recipe.name,
            imageUrl: recipe.imageUrl,
            description: recipe.description,
            characteristics: recipe.characteristics,
            ingredients: recipe.ingredients,
            recipe: recipe.recipe,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
    });

    batch.commit().then(() => {
        console.log("Database populated successfully!");
    }).catch((error) => {
        console.error("Error populating database: ", error);
    });
}

populateDatabase();