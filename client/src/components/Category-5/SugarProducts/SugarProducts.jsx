import React from "react";
import * as productService from '../../../services/sweetAndSalty';
import { ProductList } from "../ProductList/ProductList";

export const SugarProducts = ({ showNavigationAndFooter }) => (
    <ProductList 
        showNavigationAndFooter={showNavigationAndFooter} 
        fetchProducts={productService.getAllSugarProducts} 
        categoryTitle="Захарни изделия" 
    />
);