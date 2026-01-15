# Project Blueprint

## Overview

This project is a web application that introduces users to Korean culture. It includes sections for Popular Tests, Virtual Tours, and Hangeul. The main page has a catchy title and a sophisticated K-culture background to attract global users.

## Features

*   **Popular Tests:** Displays a list of popular Korean tests. (Previously K-Food/Recipes)
*   **Virtual Tours:** Provides virtual tours of famous Korean landmarks.
*   **Hangeul:** A section to learn the Korean alphabet (coming soon).
*   **Impactful Hero Section:** The main page has an impactful hero section with the title "Dive into the K-Verse" and the subtitle "From ancient palaces to the global stage, your journey starts here.", along with a sophisticated K-culture background image.
*   **Impactful Main Content Background:** The entire page now features a subtle K-culture themed background image with a transparent white overlay to ensure text readability, which is visible through the content sections.
*   **Animal Face Test:** A fun test that tells users which animal they look like.

## Current Task

The current task was to change "K-Food" to "Popular Tests" across the application, including the main page and related detail pages.

### Steps Taken

1.  **`index.html` Modification**:
    *   Changed navigation link and section ID from "k-food" to "popular-tests".
    *   Updated the Firestore data fetching from the "recipes" collection to the "tests" collection.
    *   Renamed JavaScript variables and display elements to reflect "tests" instead of "recipes".
2.  **`recipes.html` Transformation**:
    *   Renamed `recipes.html` to `tests.html`.
    *   Updated the page title, navigation links, main heading, and "Add" button text to refer to "tests".
    *   Modified table IDs and classes from "recipe-table" to "test-table".
    *   Updated JavaScript logic to fetch data from the "tests" Firestore collection and display it as "tests".
    *   Changed links from `recipe-detail.html` to `test-detail.html`.
3.  **`recipe-detail.html` Transformation**:
    *   Renamed `recipe-detail.html` to `test-detail.html`.
    *   Updated the page title, navigation links, and main content container ID to refer to "test details".
    *   Modified JavaScript logic to fetch data from the "tests" Firestore collection.
    *   Removed recipe-specific HTML elements (ingredients, recipe steps) and adapted the display to be more generic for a test detail page.
    *   Updated all associated error messages.
4.  **Animal Face Test Update (Previous Task)**:
    *   Added more animal categories to the `animals` object in `animal-face-test.html`.
    *   Added image URLs for each new animal category.
    *   Corrected invalid URLs for 'Dog' and 'Fish' in `animal-face-test.html`.
5.  **`blueprint.md` Update**: This file was updated to reflect all the above changes.