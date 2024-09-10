import React from "react";
import meatDishesRecipies from '../recipies.json';
import { RecipeInfo } from '../../RecipieInfo/RecipiesInfo';

export const MeatDishesInfo = () => {
    return (
        <RecipeInfo
            recipes={meatDishesRecipies}
            recipeIdParam="meatDishesId"  // ID-то на рецептата в URL-a
        />
    );
};