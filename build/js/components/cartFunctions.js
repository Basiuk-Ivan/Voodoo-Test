import { cart } from '../utils/variables.js';
import { deleteItemCart } from './deleteItemCart.js';
import { updateTotalPrice } from '../utils/updateTotalPrice.js';

import {
  createCartItem,
  createCartItemInfo,
  createCartWrapForTitlePrice,
  createCartImg,
  createCartCounter,
  createCounter,
  createButtonPlus,
  createButtonMinus,
  createCartTitle,
  createCartPrice,
} from './createCartItem.js';

const amountCart = document.getElementById('amount-cart');
const cartItemContent = document.getElementById('cart-item-content');

let totalPrice = 0;

// ================= //

export function createCartItemElement(item) {
  const cartItemDeleteIcon = deleteItemCart(item, totalPrice);
  const price = item.price;

  const cartItem = createCartItem(item);
  const cartItemInfo = createCartItemInfo(item);
  const cartWrapForTitlePrice = createCartWrapForTitlePrice(item);
  const cartImg = createCartImg(item);

  const cartCounter = createCartCounter(item);
  const buttonPlus = createButtonPlus(item);
  const counter = createCounter(item);
  const buttonMinus = createButtonMinus(item);

  const cartPrice = createCartPrice(price);
  const cartTitle = createCartTitle(item);

  cartCounter.append(buttonMinus, counter, buttonPlus);
  cartWrapForTitlePrice.append(cartTitle, cartPrice, cartCounter);
  cartItemInfo.append(cartImg, cartWrapForTitlePrice);
  cartItem.append(cartItemInfo, cartItemDeleteIcon);

  addPlusButtonEventListener(item, buttonPlus, counter);
  addMinusButtonEventListener(item, buttonMinus, counter);

  return cartItem;
}

function addPlusButtonEventListener(item, buttonPlus, counter) {
  buttonPlus.addEventListener('click', () => {
    if (!item.hasOwnProperty('count')) {
      item.count = 1;
    }
    item.count = Number(item.count) + 1;
    counter.textContent = item.count;
    cart.push(item);

    totalPrice += item.price;

    amountCart.textContent = cart.length;

    updateTotalPrice(totalPrice);
  });
}

function addMinusButtonEventListener(item, buttonMinus, counter) {
  buttonMinus.addEventListener('click', () => {
    if (item.count > 1) {
      item.count -= 1;
      counter.innerText = item.count;

      const removeItem = cart.find(itemId => itemId.id === item.id);

      if (removeItem) {
        const removeIndex = cart.indexOf(removeItem);
        cart.splice(removeIndex, 1);

        amountCart.textContent = cart.length;
        totalPrice -= item.price;
        updateTotalPrice(totalPrice);
      }
    }
  });
}

export function updateCartDisplay() {
  cartItemContent.innerHTML = '';

  totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const itemCounter = {};

  cart.forEach(item => {
    if (!itemCounter[item.id]) {
      itemCounter[item.id] = 1;
      const cartItem = createCartItemElement(item);
      cartItemContent.append(cartItem);
    } else {
      itemCounter[item.id]++;
    }
  });

  amountCart.textContent = cart.length;

  updateTotalPrice(totalPrice);
}
