import React from "react";
import * as productService from '../../../services/homeAndGardenService';
import { ProductList } from "../ProductList/ProductList";

export const CleaningPreparaions = ({ showNavigationAndFooter }) => (
    <ProductList 
        showNavigationAndFooter={showNavigationAndFooter} 
        fetchProducts={productService.getAllCleaningPreparations} 
        categoryTitle="Почистващи препарати"
    />
);