const ecommerceService = require('../services/ecommerceService');
const { paginate, sortProducts, generateUniqueId } = require('../utils/helpers');

const getProducts = async (req, res) => {
    try {
        const { categoryname } = req.params;
        const { n, minPrice, maxPrice, sort, order, page } = req.query;

        const products = await ecommerceService.fetchProductsFromAllCompanies(categoryname, n, minPrice, maxPrice);

        // Sort and paginate the products
        const sortedProducts = sortProducts(products, sort, order);
        const paginatedProducts = paginate(sortedProducts, n, page);

        res.json(paginatedProducts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' });
    }
};

const getProductById = async (req, res) => {
    try {
        const { productid } = req.params;
        const product = await ecommerceService.getProductById(productid);

        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch product details' });
    }
};

module.exports = {
    getProducts,
    getProductById,
};
