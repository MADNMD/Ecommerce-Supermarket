import React from "react";
import * as productService from '../../../services/sweetAndSalty';
import { ProductList } from "../ProductList/ProductList";

export const SweetAndSalty = ({ showNavigationAndFooter }) => (
    <ProductList 
        showNavigationAndFooter={showNavigationAndFooter} 
        fetchProducts={productService.getAllSweetAndSalty} 
        categoryTitle="Сладки и солени" 
    />
);