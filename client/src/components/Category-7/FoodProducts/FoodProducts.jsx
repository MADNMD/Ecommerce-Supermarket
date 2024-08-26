import React from "react";
import * as productService from '../../../services/babyAndChildrenService';
import { ProductList } from "../ProductList/ProductList";

export const FoodProducts = ({ showNavigationAndFooter }) => (
    <ProductList 
        showNavigationAndFooter={showNavigationAndFooter} 
        fetchProducts={productService.getAllBabyFoods} 
        categoryTitle="Храни"
    />
);