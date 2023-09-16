import { hiddenCart } from '../components/hiddenCart.js';
const closeCartButton = document.getElementById('close-cart');

export const closeCart = closeCartButton.addEventListener('click', () => {
  hiddenCart();
});
