export function createCartItem() {
  const cartItem = document.createElement('div');
  cartItem.classList.add('flex', 'justify-between');

  return cartItem;
}

export function createCartItemInfo() {
  const cartItemInfo = document.createElement('div');
  cartItemInfo.classList.add('flex');

  return cartItemInfo;
}

export function createCartWrapForTitlePrice() {
  const cartWrapForTitlePrice = document.createElement('div');
  cartWrapForTitlePrice.classList.add('pl-[18px]', 'cartWrapForTitlePrice');

  return cartWrapForTitlePrice;
}

export function createCartImg(item) {
  const cartImg = document.createElement('img');
  cartImg.classList.add('w-[74px]', 'h-[74px]');

  cartImg.src = item.imgCart;
  return cartImg;
}

export function createCartCounter() {
  const cartCounter = document.createElement('div');
  cartCounter.classList.add('flex', 'justify-between', 'items-center');
  return cartCounter;
}

export function createCounter(item) {
  const counter = document.createElement('div');
  counter.textContent = `${item.count || '1'}`;
  counter.id = 'counter';

  return counter;
}

export function createButtonPlus() {
  const buttonPlus = document.createElement('button');
  buttonPlus.textContent = '+';

  return buttonPlus;
}

export function createButtonMinus() {
  const buttonMinus = document.createElement('button');
  buttonMinus.textContent = '-';

  return buttonMinus;
}

export function createCartTitle(item) {
  const cartTitle = document.createElement('div');
  const truncatedName = item.name.slice(0, 7);
  cartTitle.innerText = truncatedName;

  return cartTitle;
}

export function createCartPrice(price) {
  const cartPrice = document.createElement('div');
  cartPrice.innerText = `${price} KR.`;

  return cartPrice;
}
