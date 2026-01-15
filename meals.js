const meals = [
    {
        name: "삼계탕 (Samgyetang - Ginseng Chicken Soup)",
        description: "A hot, nourishing soup, primarily eaten on the hottest days of summer to combat the heat and replenish energy.",
        recipe: [
            "Clean a young chicken and stuff it with glutinous rice, ginseng, jujubes, and garlic.",
            "Place the chicken in a pot, cover with water, and bring to a boil.",
            "Simmer for about 1-2 hours until the chicken is tender.",
            "Season with salt and pepper to taste."
        ],
        tips: "Pair with a side of kimchi and a small glass of ginseng liquor (insamju) for an authentic experience. The soup is best enjoyed piping hot.",
        recommendation_criteria: {
            season: ['Summer'],
            weather: ['Sunny', 'Hot'],
            day: []
        }
    },
    {
        name: "파전 (Pajeon - Scallion Pancake)",
        description: "A savory pancake made with a batter of flour, eggs, and scallions. Often enjoyed with makgeolli (Korean rice wine).",
        recipe: [
            "Mix flour, water, and egg to create a batter.",
            "Chop scallions into long strips. You can also add seafood like squid or shrimp.",
            "Combine the scallions (and seafood) with the batter.",
            "Pan-fry until golden brown and crispy.",
            "Serve with a dipping sauce made of soy sauce, vinegar, and a pinch of sugar."
        ],
        tips: "The sound of frying pajeon is said to resemble the sound of rain, making it a classic rainy day comfort food.",
        recommendation_criteria: {
            season: ['Spring', 'Summer', 'Autumn', 'Winter'],
            weather: ['Rainy', 'Cloudy'],
            day: []
        }
    },
    {
        name: "김치찌개 (Kimchi Jjigae - Kimchi Stew)",
        description: "A classic Korean stew made with aged kimchi, tofu, and pork or tuna. It's a staple in Korean households and a beloved comfort food.",
        recipe: [
            "Sauté pork or tuna with chopped kimchi in a pot.",
            "Add water or anchovy broth and bring to a boil.",
            "Add tofu, green onions, and a bit of gochujang (Korean chili paste) for extra flavor.",
            "Simmer until the flavors have melded together, about 15-20 minutes."
        ],
        tips: "Best served bubbling hot with a bowl of steamed rice. Use older, more sour kimchi for a deeper and more authentic flavor.",
        recommendation_criteria: {
            season: ['Winter', 'Autumn'],
            weather: ['Cold', 'Cloudy'],
            day: []
        }
    },
    {
        name: "불고기 (Bulgogi - Marinated Grilled Beef)",
        description: "Thinly sliced beef marinated in a sweet and savory sauce, then grilled or stir-fried. A popular dish for celebrations and gatherings.",
        recipe: [
            "Mix soy sauce, sugar, sesame oil, garlic, and pear juice to create the marinade.",
            "Marinate thinly sliced beef for at least 30 minutes.",
            "Grill or pan-fry the beef with sliced onions and mushrooms until cooked through.",
            "Garnish with sesame seeds and chopped green onions."
        ],
        tips: "Enjoy wrapped in lettuce leaves (ssam) with a dab of ssamjang (spicy dipping sauce) for a fresh and balanced bite. It's a great dish for sharing with friends on a Friday night.",
        recommendation_criteria: {
            season: [],
            weather: [],
            day: ['Friday', 'Saturday']
        }
    }
];
