import React from "react";
import * as productService from '../../../services/drinkAndWater';
import { ProductList } from "../ProductList/ProductList";

export const CoffeeAndTea = ({ showNavigationAndFooter }) => (
    <ProductList 
        showNavigationAndFooter={showNavigationAndFooter} 
        fetchProducts={productService.getAllCoffeeAndTea} 
        categoryTitle="Кафе, чай и какао"
    />
);