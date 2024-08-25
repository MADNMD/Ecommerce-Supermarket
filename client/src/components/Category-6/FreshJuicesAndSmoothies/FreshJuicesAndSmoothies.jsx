import React from "react";
import * as productService from '../../../services/drinkAndWater';
import { ProductList } from "../ProductList/ProductList";

export const FreshJuicesAndSmoothies = ({ showNavigationAndFooter }) => (
    <ProductList 
        showNavigationAndFooter={showNavigationAndFooter} 
        fetchProducts={productService.getAllFreshAndSmoothie} 
        categoryTitle="Фрешове, смутита, плодови и зеленчукови напитки"
    />
);