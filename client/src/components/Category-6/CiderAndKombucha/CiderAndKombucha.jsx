import React from "react";
import * as productService from '../../../services/drinkAndWater';
import { ProductList } from "../ProductList/ProductList";

export const CiderAndKombucha = ({ showNavigationAndFooter }) => (
    <ProductList 
        showNavigationAndFooter={showNavigationAndFooter} 
        fetchProducts={productService.getAllCiderAndKombucha} 
        categoryTitle="Сайдер и комбуча"
    />
);