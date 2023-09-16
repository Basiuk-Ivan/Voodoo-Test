import { fetchProducts } from './components/fetchProducts.js';
import { createPagination } from './components/createPagination.js';
import { cart } from './utils/variables.js';
import { displayProducts } from './components/createDisplayProducts.js';
import { openCart } from './utils/openCartButton.js';
import { closeCart } from './utils/closeCartButton.js';

const amountCart = document.getElementById('amount-cart');

export const loadPage = async page => {
  const products = await fetchProducts(page);

  const productsWithPrice = products.map(product => {
    const price = product.id
      .toString()
      .split('')
      .map(Number)
      .reduce((acc, num) => acc + num, 0);

    return {
      ...product,
      price: price,
    };
  });

  const productsContainer = document.getElementById('products-container');
  productsContainer.innerHTML = '';

  displayProducts(productsWithPrice, cart, amountCart);
  createPagination();
};

loadPage(1);
