import React from "react";
import * as productService from '../../../services/homeAndGardenService';
import { ProductList } from "../ProductList/ProductList";

export const CleaningProducts = ({ showNavigationAndFooter }) => (
    <ProductList 
        showNavigationAndFooter={showNavigationAndFooter} 
        fetchProducts={productService.getAllCleaningProducts} 
        categoryTitle="Средства за почистване"
    />
);