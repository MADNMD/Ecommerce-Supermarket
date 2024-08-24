import React from "react";
import * as productService from '../../../services/breadAndPastaService';
import { ProductList } from "../ProductList/ProductList";

export const BreadAndPasta = ({ showNavigationAndFooter }) => (
    <ProductList 
        showNavigationAndFooter={showNavigationAndFooter} 
        fetchProducts={productService.getAllBreadAndPasta} 
        categoryTitle="Хляб и тестени" 
    />
);