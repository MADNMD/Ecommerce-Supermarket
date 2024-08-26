import React from "react";
import * as productService from '../../../services/babyAndChildrenService';
import { ProductList } from "../ProductList/ProductList";

export const CosmeticProducts = ({ showNavigationAndFooter }) => (
    <ProductList 
        showNavigationAndFooter={showNavigationAndFooter} 
        fetchProducts={productService.getAllBabyCosmetics} 
        categoryTitle="Козметика"
    />
);