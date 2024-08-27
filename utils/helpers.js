const paginate = (array, n, page) => {
    const start = (page - 1) * n;
    return array.slice(start, start + n);
};

const sortProducts = (products, sortField, order) => {
    return products.sort((a, b) => {
        let comparison = 0;
        if (a[sortField] > b[sortField]) comparison = 1;
        else if (a[sortField] < b[sortField]) comparison = -1;
        return order === 'asc' ? comparison : -comparison;
    });
};

const generateUniqueId = (product, company) => {
    return `${company}-${product.productName}-${product.price}`;
};

module.exports = {
    paginate,
    sortProducts,
    generateUniqueId,
};
