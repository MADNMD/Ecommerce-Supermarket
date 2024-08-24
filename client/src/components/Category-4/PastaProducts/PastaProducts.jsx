import React from "react";
import * as productService from '../../../services/breadAndPastaService';
import { ProductList } from "../ProductList/ProductList";

export const PastaProducts = ({ showNavigationAndFooter }) => (
    <ProductList 
        showNavigationAndFooter={showNavigationAndFooter} 
        fetchProducts={productService.getAllPastaProducts} 
        categoryTitle="Макаронени изделия" 
    />
);