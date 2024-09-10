import React from "react";
import smoothiesRecipies from './recipies.json';
import { RecipiesList } from '../RecipiesList';

export const SmoothRecipies = ({ showNavigationAndFooter }) => {
    return (
        <RecipiesList
            recipies={smoothiesRecipies}
            likedStorageKey="likedSmoothiesRecipes"
            title="Рецепти за вкусни смутита"
            showNavigationAndFooter={showNavigationAndFooter}
        />
    );
};