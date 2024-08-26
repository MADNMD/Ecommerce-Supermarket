import React from "react";
import * as productService from '../../../services/homeAndGardenService';
import { ProductList } from "../ProductList/ProductList";

export const Flavorings = ({ showNavigationAndFooter }) => (
    <ProductList 
        showNavigationAndFooter={showNavigationAndFooter} 
        fetchProducts={productService.getAllAirFreshenersCandlesInsecticides} 
        categoryTitle="Ароматизатори, свещи, инсектициди"
    />
);