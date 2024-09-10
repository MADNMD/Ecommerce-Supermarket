import React from "react";
import dessertsRecipies from '../recipies.json';
import { RecipeInfo } from '../../RecipieInfo/RecipiesInfo';

export const DessertsInfo = () => {
    return (
        <RecipeInfo
            recipes={dessertsRecipies}
            recipeIdParam="dessertId"  // ID-то на рецептата в URL-a
        />
    );
};