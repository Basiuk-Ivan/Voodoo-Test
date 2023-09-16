const loaderElement = document.getElementById('loader');

let currentPage = 1;
let isLoading = false;

function updateLoaderVisibility() {
  if (isLoading) {
    loaderElement.classList.remove('hidden');
  } else {
    loaderElement.classList.add('hidden');
  }
}

export const fetchProducts = async page => {
  isLoading = true;
  updateLoaderVisibility();

  currentPage = page;
  try {
    const response = await fetch(
      `https://voodoo-sandbox.myshopify.com/products.json?limit=24&page=${page}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    isLoading = false;
    updateLoaderVisibility();
    return data.products;
  } catch (error) {
    console.error('Помилка під час запиту на сервер:', error);
    isLoading = false;
    updateLoaderVisibility();
    throw error;
  }
};

export const getCurrentPage = () => currentPage;
