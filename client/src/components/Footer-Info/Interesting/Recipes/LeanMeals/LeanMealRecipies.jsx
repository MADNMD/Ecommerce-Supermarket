import React from "react";
import leanMealsRecipies from './recipies.json';
import { RecipiesList } from '../RecipiesList';

export const LeanMealRecipies = ({ showNavigationAndFooter }) => {
    return (
        <RecipiesList
            recipies={leanMealsRecipies}
            likedStorageKey="likedLeanMealRecipes"
            title="Рецепти за вкусни посни ястия"
            showNavigationAndFooter={showNavigationAndFooter}
        />
    );
};