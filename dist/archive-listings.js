"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/archive-listings.js
  function formatToCzech(number) {
    return new Intl.NumberFormat("cs-CZ").format(number);
  }
  function updatePriceAndCurrency() {
    const priceElements = document.querySelectorAll('[data-text="price"]');
    priceElements.forEach((elem) => {
      const price = parseFloat(elem.textContent.replace(/\s/g, ""));
      elem.textContent = formatToCzech(price);
    });
    const currencyElements = document.querySelectorAll('[data-text="currency"]');
    currencyElements.forEach((elem) => {
      if (elem.textContent.toLowerCase() === "czk") {
        elem.textContent = "K\u010D";
      }
    });
  }
  updatePriceAndCurrency();
  document.addEventListener("facetwp-refresh", function() {
    updatePriceAndCurrency();
  });
  document.addEventListener("facetwp-loaded", function() {
    updatePriceAndCurrency();
  });
  var filtersOpenButton = document.querySelector(".filters_open-button");
  var filtersCloseButton = document.querySelector(".filters_close-button");
  var filtersWrapper = document.querySelector(".filters_filters-wrapper");
  filtersOpenButton.addEventListener("click", function() {
    filtersWrapper.classList.add("filters-open");
  });
  filtersCloseButton.addEventListener("click", function() {
    filtersWrapper.classList.remove("filters-open");
  });
})();
//# sourceMappingURL=archive-listings.js.map
