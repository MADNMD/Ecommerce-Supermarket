import React from "react";
import * as productService from '../../../services/drinkAndWater';
import { ProductList } from "../ProductList/ProductList";

export const Wine = ({ showNavigationAndFooter }) => (
    <ProductList
        showNavigationAndFooter={showNavigationAndFooter}
        fetchProducts={productService.getAllWines}
        categoryTitle="Вино"
    />
);