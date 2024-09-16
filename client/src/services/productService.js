import * as requester from '../services/requester';

export const addProduct = async (productData) => {

    try {
        const addedProduct = await requester.post('/products/add-product', productData);
        return addedProduct;
    } catch (error) {
        console.log('Error add-product service client');
        throw error;
    }
};

export const productDetails = async (productId) => {

    try {
        const product = await requester.get(`/products/product-details/${productId}`);
        return product;
    } catch (error) {
        console.log('Error product details service client');
        throw error;
    }
};

export const getProductsByCategory = async (category) => {

    try {
        const products = await requester.get(`/products/category/${category}`);
        return products;
    } catch (error) {
        console.log('Error get-products-by-category service client');
        throw error;
    }
};

export const getProductsBySubCategory = async (subcategory) => {

    try {
        const products = await requester.get(`/products/subcategory/${subcategory}`);
        return products;
    } catch (error) {
        console.log('Error get-products-by-subcategory service client');
        throw error
    }
};

export const deleteProduct = async (productId) => {

    try {
        await requester.del(`/products/delete-product/${productId}`);
        return Promise.resolve();
    } catch (error) {
        console.log(error);
        return Promise.reject(error);
    }
}

export const editProduct = async (productId, productData) => {

    try {
        const editedProduct = await requester.put(`/products/edit-product/${productId}`, productData);
        return editedProduct
    } catch (error) {
        console.log('Error edit product');
        throw error;
    }
}

export const searchProduct = async (query) => {

    try {
        const seatchProduct = await requester.get(`/products/search?q=${encodeURIComponent(query)}`);
        return seatchProduct;
    } catch (error) {
        console.log('Error search product');
        throw error;
    }
}

export const updateProductQuantity = async (productId, newQuantity) => {

    try {
        const updatedProduct = await requester.put(`/products/update-quantity/${productId}`, { productQuantity: newQuantity });
        return updatedProduct;
    } catch (error) {
        console.log('Error updating product quantity', error);
        throw error;
    }
};