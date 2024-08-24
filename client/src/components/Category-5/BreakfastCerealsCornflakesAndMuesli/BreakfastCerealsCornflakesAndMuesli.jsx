import React from "react";
import * as productService from '../../../services/sweetAndSalty';
import { ProductList } from "../ProductList/ProductList";

export const BreakfastCerealsCornflakesAndMuesli = ({ showNavigationAndFooter }) => (
    <ProductList 
        showNavigationAndFooter={showNavigationAndFooter} 
        fetchProducts={productService.getAllBreakfastCerealsCornflakesAndMuesli} 
        categoryTitle="Зърнени закуски, корнфлейкс и мюсли" 
    />
);