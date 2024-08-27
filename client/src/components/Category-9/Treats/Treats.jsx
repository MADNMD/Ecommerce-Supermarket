import React from "react";
import * as productService from '../../../services/dogAndCatService';
import { ProductList } from "../ProductList/ProductList";

export const Treats = ({ showNavigationAndFooter }) => (
    <ProductList
        showNavigationAndFooter={showNavigationAndFooter}
        fetchProducts={productService.getAllTreats}
        categoryTitle="Лакомства"
    />
);