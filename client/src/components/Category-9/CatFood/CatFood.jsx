import React from "react";
import * as productService from '../../../services/dogAndCatService';
import { ProductList } from "../ProductList/ProductList";

export const CatFood = ({ showNavigationAndFooter }) => (
    <ProductList 
        showNavigationAndFooter={showNavigationAndFooter} 
        fetchProducts={productService.getAllCatFoods} 
        categoryTitle="Храна за коте"
    />
);