import React from "react";
import * as productService from '../../../services/dogAndCatService';
import { ProductList } from "../ProductList/ProductList";

export const Accessories = ({ showNavigationAndFooter }) => (
    <ProductList 
        showNavigationAndFooter={showNavigationAndFooter} 
        fetchProducts={productService.getAllAccessories} 
        categoryTitle="Аксесоари"
    />
);