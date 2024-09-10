import React from "react";
import dessertsRecipies from './recipies.json';
import { RecipiesList } from '../RecipiesList';

export const DessertsRecipies = ({ showNavigationAndFooter }) => {
    return (
        <RecipiesList
            recipies={dessertsRecipies}
            likedStorageKey="likedDessertsRecipes"
            title="Рецепти за вкусни десерти"
            showNavigationAndFooter={showNavigationAndFooter}
        />
    );
};