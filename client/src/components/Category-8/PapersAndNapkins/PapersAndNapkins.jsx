import React from "react";
import * as productService from '../../../services/homeAndGardenService';
import { ProductList } from "../ProductList/ProductList";

export const PapersAndNapkins = ({ showNavigationAndFooter }) => (
    <ProductList 
        showNavigationAndFooter={showNavigationAndFooter} 
        fetchProducts={productService.getAllPapersNapkinsFoilsEnvelopes} 
        categoryTitle="Хартии, салфетки, фолиа, пликове"
    />
);