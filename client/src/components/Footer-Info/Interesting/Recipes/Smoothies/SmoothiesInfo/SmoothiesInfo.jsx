import React from "react";
import smoothiesRecipies from '../recipies.json';
import { RecipeInfo } from '../../RecipieInfo/RecipiesInfo';

export const SmoothiesInfo = () => {
    return (
        <RecipeInfo
            recipes={smoothiesRecipies}
            recipeIdParam="smoothId"  // ID-то на рецептата в URL-a
        />
    );
};