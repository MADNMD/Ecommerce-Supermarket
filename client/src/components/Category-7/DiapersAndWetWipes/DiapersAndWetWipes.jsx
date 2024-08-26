import React from "react";
import * as productService from '../../../services/babyAndChildrenService';
import { ProductList } from "../ProductList/ProductList";

export const DiapersAndWetWipes = ({ showNavigationAndFooter }) => (
    <ProductList 
        showNavigationAndFooter={showNavigationAndFooter} 
        fetchProducts={productService.getAllDiapersAndWetWipes} 
        categoryTitle="Пелени и мокри кърпички"
    />
);