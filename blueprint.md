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

## Current Task

The current task was to implement the Korean Meal Recommendation service.

### Steps Taken

1.  **`meals.js` Creation**:
    *   Created a new file `meals.js` to store the meal data, including names, descriptions, recipes, tips, and recommendation criteria (season, weather, day).
2.  **`korean-meal-test.html` Implementation**:
    *   Replaced the "Coming soon..." placeholder with a "Get Recommendation" button and a result container.
    *   Added JavaScript logic to:
        *   Get the user's geolocation.
        *   Fetch current weather data from the Open-Meteo API.
        *   Determine the current season and day of the week.
        *   Filter the `meals` data based on the gathered criteria.
        *   Display the recommended meal along with its recipe, tips, and the reason for the recommendation.
        *   Handle errors gracefully (e.g., location permission denied).
3.  **`blueprint.md` Update**: This file was updated to document the new feature.
