import React from "react";
import * as productService from '../../../services/drinkAndWater';
import { ProductList } from "../ProductList/ProductList";

export const EnergyDrinks = ({ showNavigationAndFooter }) => (
    <ProductList 
        showNavigationAndFooter={showNavigationAndFooter} 
        fetchProducts={productService.getAllEnergyDrinks} 
        categoryTitle="Енергийни, витаминозни и изотонични напитки"
    />
);