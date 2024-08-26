import React from "react";
import * as productService from '../../../services/homeAndGardenService';
import { ProductList } from "../ProductList/ProductList";

export const ForHomeAndGarden = ({ showNavigationAndFooter }) => (
    <ProductList 
        showNavigationAndFooter={showNavigationAndFooter} 
        fetchProducts={productService.getAllHomeAndGarden} 
        categoryTitle="За бита и градината"
    />
);