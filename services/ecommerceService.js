const axios = require('axios');
const { generateUniqueId } = require('../utils/helpers');

const companies = ["MZ", "FLP", "SNP", "WN", "AZO"];

const fetchProductsFromAllCompanies = async (categoryname, n, minPrice, maxPrice) => {
    let products = [];

    for (const company of companies) {
        const response = await axios.get(`http://20.244.56.144/test/companies/${company}/categories/${categoryname}/products`, {
            params: { top: n, minPrice, maxPrice }
        });
        products = products.concat(response.data.map(product => ({
            ...product,
            company,
            id: generateUniqueId(product, company),
        })));
    }

    return products;
};

const getProductById = async (productid) => {
    // Implement the logic to find a product by its ID, likely from an in-memory storage or cache
};

module.exports = {
    fetchProductsFromAllCompanies,
    getProductById,
};
