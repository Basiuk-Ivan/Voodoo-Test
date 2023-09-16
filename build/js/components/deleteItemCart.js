import { cart, deleteCartIcon } from '../utils/variables.js';
import { updateCartDisplay } from './cartFunctions.js';
import { updateTotalPrice } from '../utils/updateTotalPrice.js';

export function deleteItemCart(item, totalPrice) {
  const cartItemDeleteIcon = document.createElement('img');
  cartItemDeleteIcon.classList.add('w-[24px]', 'h-[24px]', 'cursor-pointer');
  cartItemDeleteIcon.src = deleteCartIcon;

  cartItemDeleteIcon.addEventListener('click', () => {
    const deleteItemCart = cart.filter(itemId => {
      return itemId.id !== item.id;
    });

    const addToCartButton = document.querySelector(
      `[data-product-id="${item.id}"]`
    );
    if (addToCartButton) {
      addToCartButton.textContent = 'Add to cart';
      addToCartButton.classList.remove('bg-violet-600');
      addToCartButton.disabled = false;
    }

    cart.length = 0;
    cart.push(...deleteItemCart);

    updateTotalPrice(totalPrice);
    updateCartDisplay();
  });

  return cartItemDeleteIcon;
}
