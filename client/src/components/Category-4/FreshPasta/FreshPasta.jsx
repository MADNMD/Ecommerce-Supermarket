import React from "react";
import * as productService from '../../../services/breadAndPastaService';
import { ProductList } from "../ProductList/ProductList";

export const FreshPasta = ({ showNavigationAndFooter }) => (
    <ProductList 
        showNavigationAndFooter={showNavigationAndFooter} 
        fetchProducts={productService.getAllFreshPasta} 
        categoryTitle="Прясна паста" 
    />
);