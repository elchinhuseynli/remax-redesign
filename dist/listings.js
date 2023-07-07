"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/listings.js
  function formatToCzech(number) {
    return new Intl.NumberFormat("cs-CZ").format(number);
  }
  var priceElements = document.querySelectorAll('[data-text="price"]');
  priceElements.forEach((elem) => {
    const price = parseFloat(elem.textContent.replace(/\s/g, ""));
    elem.textContent = formatToCzech(price);
  });
  var currencyElements = document.querySelectorAll('[data-text="currency"]');
  currencyElements.forEach((elem) => {
    elem.textContent = "K\u010D";
  });
  var parent = document.querySelector(".single-listings_gallery-wrapper");
  var children = parent ? parent.querySelectorAll(".w-inline-block.w-lightbox") : void 0;
  if (children) {
    if (children.length > 0) {
      parent.removeChild(children[0]);
    }
    for (let i = 1; i < children.length; i++) {
      if (i >= 5) {
        parent.removeChild(children[i]);
      }
    }
  }
  window.onload = function() {
    document.querySelectorAll(".single-listings_icon-wrapper").forEach(function(el) {
      const tooltipText = el.getAttribute("data-tooltip");
      const tooltipEl = el.querySelector(".tooltip");
      tooltipEl.textContent = tooltipText;
    });
  };
  var listingTitleElement = document.querySelector('[data-text="listing title"]');
  var listingCodeElement = document.querySelector('[data-text="listing code"]');
  var textareaElement = document.querySelector("#Property-Form-Message");
  if (listingTitleElement && listingCodeElement && textareaElement) {
    listingTitle = listingTitleElement.textContent.trim();
    listingCode = listingCodeElement.textContent.trim();
    defaultMessage = `M\xE1m z\xE1jem o ${listingTitle}, \u010D\xEDslo nab\xEDdky ${listingCode}.`;
    textareaElement.value = defaultMessage;
  }
  var listingTitle;
  var listingCode;
  var defaultMessage;
  var limit = 580;
  var moreText = "V\xEDce informac\xED";
  var lessText = "Uk\xE1zat m\xE9n\u011B";
  var contentElement = document.querySelector(".text-rich-text.w-richtext p");
  var content = contentElement.innerHTML;
  if (content.length > limit) {
    const visibleContent = content.substr(0, limit);
    const hiddenContent = content.substr(limit);
    const ellipsisSpan = `<span class="ellipsis">...</span>`;
    const hiddenSpan = `<span class="more-content" style="display:none;">${hiddenContent}</span>`;
    const button = `<button class="more-btn">${moreText}</button>`;
    contentElement.innerHTML = `${visibleContent}${ellipsisSpan}${hiddenSpan}${button}`;
  }
  document.querySelector(".more-btn")?.addEventListener("click", function() {
    const moreContent = this.previousElementSibling;
    const ellipsis = moreContent.previousElementSibling;
    const isContentHidden = moreContent.style.display === "none";
    moreContent.style.display = isContentHidden ? "inline" : "none";
    ellipsis.style.display = isContentHidden ? "none" : "inline";
    this.innerHTML = isContentHidden ? lessText : moreText;
  });
})();
//# sourceMappingURL=listings.js.map
