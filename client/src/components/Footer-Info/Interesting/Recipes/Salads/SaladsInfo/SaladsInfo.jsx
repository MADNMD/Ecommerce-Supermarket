import React from "react";
import saladsRecipies from '../recipies.json';
import { RecipeInfo } from '../../RecipieInfo/RecipiesInfo';

export const SaladsInfo = () => {
    return (
        <RecipeInfo
            recipes={saladsRecipies}
            recipeIdParam="saladId"  // ID-то на рецептата в URL-a
        />
    );
};