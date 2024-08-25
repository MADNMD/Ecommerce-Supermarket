import React from "react";
import * as productService from '../../../services/drinkAndWater';
import { ProductList } from "../ProductList/ProductList";

export const Water = ({ showNavigationAndFooter }) => (
    <ProductList 
        showNavigationAndFooter={showNavigationAndFooter} 
        fetchProducts={productService.getAllWater} 
        categoryTitle="Вода"
    />
);