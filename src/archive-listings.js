function formatToCzech(number) {
  return new Intl.NumberFormat('cs-CZ').format(number);
}

function updatePriceAndCurrency() {
  const priceElements = document.querySelectorAll('[data-text="price"]');
  priceElements.forEach((elem) => {
    const price = parseFloat(elem.textContent.replace(/\s/g, ''));
    elem.textContent = formatToCzech(price);
  });

  const currencyElements = document.querySelectorAll('[data-text="currency"]');
  currencyElements.forEach((elem) => {
    if (elem.textContent.toLowerCase() === 'czk') {
      elem.textContent = 'Kč';
    }
    // if the currency is 'eur' or anything else, we leave it as is.
  });
}

// Call the function initially
updatePriceAndCurrency();

document.addEventListener('facetwp-refresh', function () {
  updatePriceAndCurrency();
});

document.addEventListener('facetwp-loaded', function () {
  updatePriceAndCurrency();
});

let filtersOpenButton = document.querySelector('.filters_open-button');
let filtersCloseButton = document.querySelector('.filters_close-button');
let filtersWrapper = document.querySelector('.filters_filters-wrapper');

filtersOpenButton.addEventListener('click', function () {
  filtersWrapper.classList.add('filters-open');
});
filtersCloseButton.addEventListener('click', function () {
  filtersWrapper.classList.remove('filters-open');
});
