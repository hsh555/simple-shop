const products = [
    {id: 1,productTitle: "گوشی موبایل سامسونگ مدل A12", productPrice: "3,500,000", off: 20},
    {id: 2,productTitle: "هدفون شیائومی مدل K1", productPrice: "425,000", off: 10},
    {id: 3,productTitle: "پاوربانک 20000 میلی آمپر", productPrice: "853,000", off: 1},
    {id: 4,productTitle: "لبتاپ ایسر مدل G75", productPrice: "38,250,000", off: 0}
];

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(products), 2000);
    });
}

export default getProducts;