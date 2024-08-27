import React from "react";
import * as productService from '../../../services/dogAndCatService';
import { ProductList } from "../ProductList/ProductList";

export const DogAndCat = ({ showNavigationAndFooter }) => (
    <ProductList 
        showNavigationAndFooter={showNavigationAndFooter} 
        fetchProducts={productService.getAllDogAndCatProducts} 
        categoryTitle="Куче и коте"
    />
);