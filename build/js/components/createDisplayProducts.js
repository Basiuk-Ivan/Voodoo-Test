import { MAX_TITLE_LENGTH } from '../utils/variables.js';

function hiddenElement(product) {
  const hiddenCard = document.createElement('div');
  hiddenCard.classList.add('flex', 'hidden', 'w-full', 'h-full');
  hiddenCard.textContent = `Created: ${product.created_at}
  `;
  hiddenCard.id = 'hidden-element';
  return hiddenCard;
}

function createProductCard() {
  const productCard = document.createElement('li');
  productCard.classList.add('mb-4', 'flex', 'flex-col');
  return productCard;
}

function createInnerContainer(product) {
  const hiddenElementTag = hiddenElement(product);

  const innerContainer = document.createElement('div');
  innerContainer.classList.add(
    'w-[300px]',
    'h-[300px]',
    'p-3',
    'border',
    'border-black',
    'cursor-pointer'
  );

  const img = document.createElement('img');
  if (product.images && product.images.length > 0) {
    img.src = product.images[0].src;
    img.classList.add('w-full', 'h-full', 'object-cover');
  } else {
    const usedBlock = document.createElement('div');
    usedBlock.classList.add(
      'text-xs',
      'font-normal',
      'text-alpha',
      'bg-black',
      'rounded',
      'w-12',
      'h-6',
      'uppercase',
      'flex',
      'items-center',
      'justify-center'
    );
    usedBlock.textContent = 'Used';
    innerContainer.appendChild(usedBlock);
  }

  innerContainer.appendChild(img);
  innerContainer.append(hiddenElementTag);

  innerContainer.addEventListener('click', () => {
    img.classList.toggle('hidden');
    hiddenElementTag.classList.toggle('block');

    hiddenElementTag.classList.toggle('hidden');
  });
  return innerContainer;
}

function createInfoContainer() {
  const infoContainer = document.createElement('div');
  infoContainer.classList.add('flex', 'justify-between', 'my-3');
  return infoContainer;
}

function createNamePriceContainer(product) {
  const namePriceContainer = document.createElement('div');
  namePriceContainer.classList.add('flex', 'flex-col');

  const productName = document.createElement('span');
  const productPrice = document.createElement('span');
  productName.classList.add('text-xs', 'font-bold');
  productPrice.classList.add('text-xs', 'font-bold');

  productName.innerText = `${
    product.title?.length > MAX_TITLE_LENGTH
      ? `${product.title?.slice(0, MAX_TITLE_LENGTH)}...`
      : product.title
  }`;
  productPrice.innerText = `${product.price} KR.`;

  namePriceContainer.append(productName, productPrice);
  return namePriceContainer;
}

function createConditionContainer(product) {
  const conditionContainer = document.createElement('div');
  conditionContainer.classList.add('flex', 'flex-col');

  const conditionTitle = document.createElement('span');
  conditionTitle.classList.add('text-sm', 'font-medium', 'text-right');
  const productId = product.id.toString();
  const lastFiveDigits = productId.slice(-5);

  conditionTitle.textContent = lastFiveDigits;

  const conditionValue = document.createElement('span');
  conditionValue.classList.add('text-sm', 'font-normal');
  conditionValue.textContent = `${
    product.vendor?.length > MAX_TITLE_LENGTH
      ? `${product.vendor?.slice(0, MAX_TITLE_LENGTH)}...`
      : product.vendor
  }`;

  conditionContainer.append(conditionTitle);
  conditionContainer.append(conditionValue);

  return conditionContainer;
}

function createAddToCartButton(product, cart, amountCart) {
  const addToCartButton = document.createElement('button');
  addToCartButton.classList.add(
    'w-full',
    'py-4',
    'bg-black',
    'text-white',
    'text-sm',
    'font-bold',
    'rounded',
    'uppercase',
    'hover:bg-violet-600',
    'transition',
    'add-to-cart-button'
  );
  addToCartButton.textContent = 'Add to cart';
  addToCartButton.setAttribute('data-product-id', product.id.toString());

  addToCartButton.addEventListener('click', () => {
    const productCart = {
      id: product.id.toString(),
      name: createNamePriceContainer(product).textContent,
      imgCart: createInnerContainer(product).querySelector('img').src,
      price: product.price,
    };

    const isItemInCart = cart.some(item => item.id === productCart.id);

    if (!isItemInCart) {
      cart.push(productCart);
      amountCart.textContent = cart.length;
      addToCartButton.textContent = 'Added';
      addToCartButton.classList.add('bg-violet-600');
      addToCartButton.disabled = true;
    }
  });

  return addToCartButton;
}

export function displayProducts(products, cart, amountCart) {
  const productsContainer = document.getElementById('products-container');

  products.forEach(product => {
    const productCard = createProductCard(product);
    const innerContainer = createInnerContainer(product);
    const infoContainer = createInfoContainer(product);
    const namePriceContainer = createNamePriceContainer(product);
    const conditionContainer = createConditionContainer(product);
    const addToCartButton = createAddToCartButton(product, cart, amountCart);

    productCard.append(innerContainer);
    productCard.append(infoContainer);
    infoContainer.append(namePriceContainer);
    infoContainer.append(conditionContainer);
    productCard.append(addToCartButton);

    productsContainer.append(productCard);
  });
}
