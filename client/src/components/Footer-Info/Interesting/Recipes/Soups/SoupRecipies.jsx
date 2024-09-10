import React from "react";
import soupsRecipies from './recipies.json';
import { RecipiesList } from '../RecipiesList';

export const SoupRecipies = ({ showNavigationAndFooter }) => {
    return (
        <RecipiesList
            recipies={soupsRecipies}
            likedStorageKey="likedSoupRecipes"
            title="Рецепти за вкусни супи"
            showNavigationAndFooter={showNavigationAndFooter}
        />
    );
};