import React from "react";
import * as productService from '../../../services/dogAndCatService';
import { ProductList } from "../ProductList/ProductList";

export const DogFood = ({ showNavigationAndFooter }) => (
    <ProductList 
        showNavigationAndFooter={showNavigationAndFooter} 
        fetchProducts={productService.getAllDogFoods} 
        categoryTitle="Храна за куче"
    />
);