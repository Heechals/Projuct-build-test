# Project Blueprint

## Overview

This project is a web application that introduces users to Korean culture. It includes sections for Popular Tests, Virtual Tours, and Hangeul. The main page has a catchy title and a sophisticated K-culture background to attract global users.

## Features

*   **Popular Tests:** Displays a list of popular Korean tests, including the Animal Face Test, Korean Meal Recommendation, and Today's Fortune.
*   **Virtual Tours:** Provides virtual tours of famous Korean landmarks.
*   **Hangeul:** A section to learn the Korean alphabet (coming soon).
*   **Impactful Hero Section:** The main page has an impactful hero section with the title "Dive into the K-Verse" and the subtitle "From ancient palaces to the global stage, your journey starts here.", along with a sophisticated K-culture background image.
*   **Impactful Main Content Background:** The entire page now features a subtle K-culture themed background image with a transparent white overlay to ensure text readability, which is visible through the content sections.
*   **Animal Face Test:** A fun test that tells users which animal they look like.
*   **Korean Meal Recommendation:** A dynamic recommendation service that suggests a Korean meal based on the user's local weather, the current season, and the day of the week. It provides the recipe, tips, and a reason for the recommendation.
*   **Today's Fortune:** A fun service that provides a personalized fortune for the day based on the user's date of birth. It includes categories for general, money, relationship, and health luck, as well as a lucky color and number.

## Current Task

The current task was to implement the "Today's Fortune" service.

### Steps Taken

1.  **`fortunes.js` Creation**:
    *   Created a new file `fortunes.js` to store various fortune-telling phrases and lucky items, categorized for variability.
2.  **`fortune-test.html` Implementation**:
    *   Replaced the "Coming soon..." placeholder with a date input for the user's birthday and a "Get Fortune" button.
    *   Added JavaScript logic to:
        *   Take the user's date of birth as input.
        *   Generate a "seed" based on the birth date and the current date to create a pseudo-random, personalized result.
        *   Select a fortune from different categories (general, money, relationship, health) and pick a lucky color/number.
        *   Display the complete fortune to the user.
3.  **Korean Meal Recommendation (Previous Task)**:
    *   Implemented a dynamic recommendation service on `korean-meal-test.html`.
4.  **`blueprint.md` Update**: This file was updated to document the new feature.