const meals = [
    {
        name: "삼계탕 (Samgyetang - Ginseng Chicken Soup)",
        description: "A hot, nourishing soup, primarily eaten on the hottest days of summer to combat the heat and replenish energy.",
        imageUrl: "https://lh3.google.com/u/0/d/1Vje4qLkmoCB1MgDjddP83K3UBY_xO3o6=w403-h894-iv1?auditContext=prefetch",
        recipe: [
            "Clean a young chicken and stuff it with glutinous rice, ginseng, jujubes, and garlic.",
            "Place the chicken in a pot, cover with water, and bring to a boil.",
            "Simmer for about 1-2 hours until the chicken is tender.",
            "Season with salt and pepper to taste."
        ],
        tips: "Pair with a side of kimchi and a small glass of ginseng liquor (insamju) for an authentic experience. The soup is best enjoyed piping hot.",
        recommendation_criteria: { season: ['Summer'], weather: ['Sunny', 'Hot'], day: [] }
    },
    {
        name: "해물파전 (Haemul Pajeon - Seafood Scallion Pancake)",
        description: "A savory pancake made with a batter of flour, eggs, scallions, and various seafood. Often enjoyed with makgeolli (Korean rice wine).",
        imageUrl: "https://lh3.google.com/u/0/d/1RbXfemj6nA6mhTaC6_Uwz8TRFngFRtTA=w403-h894-iv1?auditContext=prefetch",
        recipe: [
            "Mix flour, water, and egg to create a batter.",
            "Chop scallions and your choice of seafood (squid, shrimp, mussels).",
            "Combine everything with the batter.",
            "Pan-fry until golden brown and crispy.",
            "Serve with a dipping sauce made of soy sauce and vinegar."
        ],
        tips: "The sound of frying pajeon is said to resemble the sound of rain, making it a classic rainy day comfort food.",
        recommendation_criteria: { season: [], weather: ['Rainy', 'Cloudy'], day: [] }
    },
    {
        name: "김치찌개 (Kimchi Jjigae - Kimchi Stew)",
        description: "A classic Korean stew made with aged kimchi, tofu, and pork or tuna. It's a staple in Korean households and a beloved comfort food.",
        imageUrl: "https://lh3.google.com/u/0/d/14Uv8TKR-_rGyg2sur59aO4qn4cenUmL9=w958-h894-iv1?auditContext=prefetch",
        recipe: [
            "Sauté pork or tuna with chopped kimchi in a pot.",
            "Add water or anchovy broth and bring to a boil.",
            "Add tofu, green onions, and a bit of gochujang (Korean chili paste) for extra flavor.",
            "Simmer until the flavors have melded together, about 15-20 minutes."
        ],
        tips: "Best served bubbling hot with a bowl of steamed rice. Use older, more sour kimchi for a deeper and more authentic flavor.",
        recommendation_criteria: { season: ['Winter', 'Autumn'], weather: ['Cold', 'Cloudy'], day: [] }
    },
    {
        name: "불고기 (Bulgogi - Marinated Grilled Beef)",
        description: "Thinly sliced beef marinated in a sweet and savory sauce, then grilled or stir-fried. A popular dish for celebrations and gatherings.",
        imageUrl: "https://lh3.google.com/u/0/d/1BSqOjbGD61vcyU46UHFPx8_0Zdf6FIya=w403-h894-iv1?auditContext=prefetch",
        recipe: [
            "Mix soy sauce, sugar, sesame oil, garlic, and pear juice to create the marinade.",
            "Marinate thinly sliced beef for at least 30 minutes.",
            "Grill or pan-fry the beef with sliced onions and mushrooms until cooked through.",
            "Garnish with sesame seeds and chopped green onions."
        ],
        tips: "Enjoy wrapped in lettuce leaves (ssam) with a dab of ssamjang (spicy dipping sauce) for a fresh and balanced bite. It's a great dish for sharing with friends on a Friday night.",
        recommendation_criteria: { season: [], weather: [], day: ['Friday', 'Saturday'] }
    },
    {
        name: "김밥 (Kimbap)",
        description: "Korean seaweed rice rolls filled with a variety of ingredients. Perfect for picnics and light lunches.",
        imageUrl: "https://lh3.google.com/u/0/d/1lyrv1ghyCYtZLRuftLY8brzU6M9gxAhi=w1920-h911-iv1?auditContext=prefetch",
        recipe: ["Season steamed rice with sesame oil and salt.", "Place a sheet of seaweed (gim) on a bamboo roller, spread rice on top.", "Add your fillings (e.g., pickled radish, ham, egg, spinach, carrots).", "Roll it up tightly and slice into bite-sized pieces."],
        tips: "Make a big batch as it's great for sharing and can be enjoyed throughout the day.",
        recommendation_criteria: { season: ['Spring', 'Summer'], weather: ['Sunny'], day: [] }
    },
    {
        name: "김치전 (Kimchi Jeon - Kimchi Pancake)",
        description: "A savory pancake made with chopped kimchi. A popular snack and appetizer.",
        imageUrl: "https://lh3.google.com/u/0/d/1Cy6VGe2ivzge2tbFYLvdVrPNWlizcwS9=w403-h894-iv1?auditContext=prefetch",
        recipe: ["Mix flour, water, and kimchi juice to make a batter.", "Add chopped kimchi and pan-fry until golden and crispy.", "Serve with a soy sauce-based dipping sauce."],
        tips: "Like Pajeon, this is another classic rainy-day food in Korea.",
        recommendation_criteria: { season: [], weather: ['Rainy', 'Cloudy'], day: [] }
    },
    {
        name: "냉면 (Naengmyeon - Cold Noodles)",
        description: "A cold noodle dish perfect for hot summer days. The noodles are long and chewy, served in a tangy, chilled broth.",
        imageUrl: "https://lh3.google.com/u/0/d/1qlqcuNBi3pc8GDta8ICRkS74mwm96A3c=w958-h894-iv1?auditContext=forDisplay",
        recipe: ["Boil buckwheat noodles until cooked, then rinse in cold water.", "Prepare a chilled broth, often made from beef or dongchimi (radish water kimchi).", "Serve the noodles in the cold broth with slices of cucumber, pear, boiled egg, and beef."],
        tips: "Add a dash of vinegar and a dollop of mustard for an extra kick of flavor.",
        recommendation_criteria: { season: ['Summer'], weather: ['Hot', 'Sunny'], day: [] }
    },
    {
        name: "닭갈비 (Dakgalbi - Spicy Stir-fried Chicken)",
        description: "A popular dish made by stir-frying marinated chicken in a gochujang-based sauce with sweet potatoes, cabbage, and other vegetables.",
        imageUrl: "https://lh3.google.com/u/0/d/1GgFXqhdHf-aTa_oK-r7ifWfnnIcvvYL7=w403-h894-iv1?auditContext=prefetch",
        recipe: ["Marinate diced chicken in a gochujang-based sauce.", "Stir-fry the chicken with vegetables in a large pan.", "Once cooked, it's often enjoyed communally from the pan."],
        tips: "After finishing most of the chicken and vegetables, it's common to add rice to the remaining sauce and stir-fry it for a delicious 'bokkeumbap' (fried rice).",
        recommendation_criteria: { season: ['Autumn', 'Winter'], weather: ['Cold'], day: ['Friday', 'Saturday'] }
    },
    {
        name: "된장찌개 (Doenjang-jjigae - Soybean Paste Stew)",
        description: "A hearty, savory stew made with Korean soybean paste (doenjang). A daily staple in Korean cuisine.",
        imageUrl: "https://lh3.google.com/u/0/d/1D9cJG2ZgyaVejGDyy9-6qPSTDqeZWhP5=w403-h894-iv1?auditContext=prefetch",
        recipe: ["Start with a broth (anchovy or vegetable).", "Dissolve doenjang into the broth.", "Add your favorite ingredients like tofu, mushrooms, zucchini, and potatoes.", "Simmer until all ingredients are cooked through."],
        tips: "Often served with a bowl of rice for a simple, yet satisfying and healthy meal.",
        recommendation_criteria: { season: [], weather: ['Cloudy', 'Cold'], day: [] }
    },
    {
        name: "떡볶이 (Tteokbokki - Spicy Rice Cakes)",
        description: "One of Korea's most famous street foods. Chewy rice cakes and fish cakes simmered in a sweet and spicy gochujang-based sauce.",
        imageUrl: "https://lh3.google.com/u/0/d/1j_ioPyYIZVZILiJCLOfDYmuvojDwVlz5=w403-h894-iv1?auditContext=prefetch",
        recipe: ["Boil rice cakes (tteok) to soften them.", "In a pan, mix gochujang, sugar, and water to create a sauce.", "Add the rice cakes and fish cakes, and simmer until the sauce thickens."],
        tips: "Add a boiled egg or some ramen noodles to make it even more filling. Cheese tteokbokki is also a very popular variation!",
        recommendation_criteria: { season: [], weather: ['Cold', 'Rainy'], day: [] }
    },
    {
        name: "비빔밥 (Bibimbap - Mixed Rice with Vegetables)",
        description: "A quintessential Korean dish consisting of a bowl of warm white rice topped with an array of seasoned vegetables, gochujang, and a fried egg.",
        imageUrl: "https://lh3.google.com/u/0/d/1nYanZjRkWCeUWtDV45lx0MMhVwyp7n3z=w403-h894-iv1?auditContext=prefetch",
        recipe: ["Prepare and season various vegetables (sautéed, blanched).", "Place the vegetables neatly over a bowl of rice.", "Top with a fried egg and a dollop of gochujang.", "Mix everything together right before eating."],
        tips: "For a sizzling experience, try 'Dolsot Bibimbap', which is served in a hot stone bowl that crisps the bottom layer of rice.",
        recommendation_criteria: { season: ['Spring'], weather: [], day: ['Monday', 'Wednesday'] }
    },
    {
        name: "삼겹살 (Samgyeopsal - Grilled Pork Belly)",
        description: "Thick slices of pork belly grilled at the diner's table. A very popular dish in Korea, often enjoyed with soju.",
        imageUrl: "https://lh3.google.com/u/0/d/1DftCYB65hi25IpzqX7Yk2DC_a1VqzDKz=w958-h894-iv1?auditContext=prefetch",
        recipe: ["Grill thick slices of pork belly on a tabletop grill.", "Once cooked, cut the meat into bite-sized pieces with scissors.", "Serve with various dipping sauces and side dishes."],
        tips: "Wrap a piece of grilled meat in a lettuce or perilla leaf, add some grilled garlic, kimchi, and ssamjang for the perfect bite.",
        recommendation_criteria: { season: [], weather: [], day: ['Friday', 'Saturday'] }
    }
];