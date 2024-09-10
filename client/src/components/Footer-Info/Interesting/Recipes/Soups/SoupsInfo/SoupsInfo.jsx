import React from "react";
import soupsRecipies from '../recipies.json';
import { RecipeInfo } from '../../RecipieInfo/RecipiesInfo';

export const SoupsInfo = () => {
    return (
        <RecipeInfo
            recipes={soupsRecipies}
            recipeIdParam="soupId"  // ID-то на рецептата в URL-a
        />
    );
};