import { showCart } from '../components/showCart.js';
import { updateCartDisplay } from '../components/cartFunctions.js';

const openCartButton = document.getElementById('open-cart');

export const openCart = openCartButton.addEventListener('click', () => {
  showCart();
  updateCartDisplay();
});
