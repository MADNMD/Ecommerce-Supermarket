import React from "react";
import saladsRecipies from './recipies.json';
import { RecipiesList } from '../RecipiesList';

export const SaladRecipies = ({ showNavigationAndFooter }) => {
    return (
        <RecipiesList
            recipies={saladsRecipies}
            likedStorageKey="likedSaladRecipes"
            title="Рецепти за вкусни салати"
            showNavigationAndFooter={showNavigationAndFooter}
        />
    );
};