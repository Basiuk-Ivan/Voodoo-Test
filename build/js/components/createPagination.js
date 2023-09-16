import { getCurrentPage } from './fetchProducts.js';
import { totalPages } from '../utils/variables.js';
import { loadPage } from '../index.js';

export const createPagination = () => {
  const currentPage = getCurrentPage();

  const paginationContainer = document.getElementById('pagination');

  paginationContainer.innerHTML = '';

  const maxButtons = 5;
  const sideButtons = Math.floor(maxButtons / 2);

  let startPage = currentPage - sideButtons;
  let endPage = currentPage + sideButtons;

  if (startPage < 1) {
    startPage = 1;
    endPage = maxButtons;
  }

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = totalPages - maxButtons + 1;
  }

  if (startPage < 1) {
    startPage = 1;
  }

  if (startPage > 1) {
    const firstPageButton = document.createElement('button');
    firstPageButton.className = 'w-10 h-10 rounded-full border border-black';
    firstPageButton.innerText = '1';
    firstPageButton.addEventListener('click', () => loadPage(1));
    paginationContainer.appendChild(firstPageButton);

    if (startPage > 2) {
      const ellipsis = document.createElement('span');
      ellipsis.innerText = '...';
      paginationContainer.appendChild(ellipsis);
    }
  }

  for (let page = startPage; page <= endPage; page++) {
    const pageButton = document.createElement('button');
    pageButton.className = 'w-10 h-10 rounded-full border border-black';

    if (page === currentPage) {
      pageButton.classList.add('active');
    }

    pageButton.innerText = page;
    pageButton.addEventListener('click', () => loadPage(page));
    paginationContainer.appendChild(pageButton);
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      const ellipsis = document.createElement('span');
      ellipsis.innerText = '...';
      paginationContainer.appendChild(ellipsis);
    }

    const lastPageButton = document.createElement('button');
    lastPageButton.className = 'w-10 h-10 rounded-full border border-black';
    lastPageButton.innerText = totalPages;
    lastPageButton.addEventListener('click', () => loadPage(totalPages));
    paginationContainer.appendChild(lastPageButton);
  }
};
