import React from "react";
import * as productService from '../../../services/sweetAndSalty';
import { ProductList } from "../ProductList/ProductList";

export const ChipsAndSnacks = ({ showNavigationAndFooter }) => (
    <ProductList 
        showNavigationAndFooter={showNavigationAndFooter} 
        fetchProducts={productService.getAllChipsAndSnacks} 
        categoryTitle="Чипсове и снаксове" 
    />
);