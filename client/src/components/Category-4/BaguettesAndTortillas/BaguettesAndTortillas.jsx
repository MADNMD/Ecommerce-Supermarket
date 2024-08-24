import React from "react";
import * as productService from '../../../services/breadAndPastaService';
import { ProductList } from "../ProductList/ProductList";

export const BaguettesAndTortillas = ({ showNavigationAndFooter }) => (
    <ProductList 
        showNavigationAndFooter={showNavigationAndFooter} 
        fetchProducts={productService.getAllBaguettesAndTortillas} 
        categoryTitle="Багети и тортили" 
    />
);