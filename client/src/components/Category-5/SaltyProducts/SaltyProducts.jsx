import React from "react";
import * as productService from '../../../services/sweetAndSalty';
import { ProductList } from "../ProductList/ProductList";

export const SaltyProducts = ({ showNavigationAndFooter }) => (
    <ProductList 
        showNavigationAndFooter={showNavigationAndFooter} 
        fetchProducts={productService.getAllSaltyProducts} 
        categoryTitle="Солени изделия" 
    />
);