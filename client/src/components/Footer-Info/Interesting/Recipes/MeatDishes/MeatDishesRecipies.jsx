import React from "react";
import meanDishesRecipies from './recipies.json';
import { RecipiesList } from '../RecipiesList';

export const MeatDishesRecipies = ({ showNavigationAndFooter }) => {
    return (
        <RecipiesList
            recipies={meanDishesRecipies}
            likedStorageKey="likedMeanDishesRecipes"
            title="Рецепти за вкусни месни ястия"
            showNavigationAndFooter={showNavigationAndFooter}
        />
    );
};