import React from "react";
import leanMealsRecipies from '../recipies.json';
import { RecipeInfo } from '../../RecipieInfo/RecipiesInfo';

export const LeanMealsInfo = () => {
    return (
        <RecipeInfo
            recipes={leanMealsRecipies}
            recipeIdParam="leanMealsId"  // ID-то на рецептата в URL-a
        />
    );
};