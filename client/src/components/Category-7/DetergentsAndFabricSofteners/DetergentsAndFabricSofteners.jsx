import React from "react";
import * as productService from '../../../services/babyAndChildrenService';
import { ProductList } from "../ProductList/ProductList";

export const DetergentsAndFabricSofteners = ({ showNavigationAndFooter }) => (
    <ProductList 
        showNavigationAndFooter={showNavigationAndFooter} 
        fetchProducts={productService.getAllDetergentsAndFabricSofteners} 
        categoryTitle="Перилни препарати и омекотители"
    />
);