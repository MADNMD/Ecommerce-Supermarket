import React from "react";
import * as productService from '../../../services/breadAndPastaService';
import { ProductList } from "../ProductList/ProductList";

export const Bread = ({ showNavigationAndFooter }) => (
    <ProductList 
        showNavigationAndFooter={showNavigationAndFooter} 
        fetchProducts={productService.getAllBreads} 
        categoryTitle="Хляб" 
    />
);