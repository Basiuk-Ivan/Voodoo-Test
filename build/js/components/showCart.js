const openCartButton = document.getElementById('open-cart');
const cartMenu = document.getElementById('cart-menu');
const mainContent = document.getElementById('main');
const footer = document.getElementById('footer');

export function showCart() {
  cartMenu.classList.toggle('hidden');
  mainContent.classList.toggle('hidden');
  footer.classList.toggle('hidden');
  openCartButton.classList.toggle('hidden');
}
