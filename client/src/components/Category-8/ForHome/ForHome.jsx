import React from "react";
import * as productService from '../../../services/homeAndGardenService';
import { ProductList } from "../ProductList/ProductList";

export const ForHome = ({ showNavigationAndFooter }) => (
    <ProductList 
        showNavigationAndFooter={showNavigationAndFooter} 
        fetchProducts={productService.getAllHomeAndGardenProducts} 
        categoryTitle="За дома и бита"
    />
);