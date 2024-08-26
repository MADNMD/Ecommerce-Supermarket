import React from "react";
import * as productService from '../../../services/babyAndChildrenService';
import { ProductList } from "../ProductList/ProductList";

export const DrinkProducts = ({ showNavigationAndFooter }) => (
    <ProductList 
        showNavigationAndFooter={showNavigationAndFooter} 
        fetchProducts={productService.getAllBabyDrinks} 
        categoryTitle="Напитки"
    />
);