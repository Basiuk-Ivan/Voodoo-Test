const totalPrices = document.getElementById('total-price');

export function updateTotalPrice(totalPrice) {
  totalPrices.innerText = `${totalPrice} KR.`;
}
