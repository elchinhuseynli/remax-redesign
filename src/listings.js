// format price to czech

function formatToCzech(number) {
  return new Intl.NumberFormat('cs-CZ').format(number);
}

const priceElements = document.querySelectorAll('[data-text="price"]');

priceElements.forEach((elem) => {
  const price = parseFloat(elem.textContent.replace(/\s/g, ''));
  elem.textContent = formatToCzech(price);
});

// find all elements with attribute data-text="currency" and change inner text from CZK to Kč
const currencyElements = document.querySelectorAll('[data-text="currency"]');
currencyElements.forEach((elem) => {
  elem.textContent = 'Kč';
});

// gallery

const parent = document.querySelector('.single-listings_gallery-wrapper');
const children = parent ? parent.querySelectorAll('.w-inline-block.w-lightbox') : undefined;

// gallery list modification
if (children) {
  if (children.length > 0) {
    children[0].style.display = 'none'; // Hiding the first child element
  }
  for (let i = 1; i < children.length; i++) {
    // Start from the second child element
    if (i >= 5) {
      // hide the element instead of removing it from the document
      children[i].style.display = 'none';
    }
  }
}

// tooltip
window.onload = function () {
  document.querySelectorAll('.single-listings_icon-wrapper').forEach(function (el) {
    const tooltipText = el.getAttribute('data-tooltip');
    const tooltipEl = el.querySelector('.tooltip');
    tooltipEl.textContent = tooltipText;
  });
};
// form message

var listingTitleElement = document.querySelector('[data-text="listing title"]');
var listingCodeElement = document.querySelector('[data-text="listing code"]');
var textareaElement = document.querySelector('#Property-Form-Message');

if (listingTitleElement && listingCodeElement && textareaElement) {
  var listingTitle = listingTitleElement.textContent.trim();
  var listingCode = listingCodeElement.textContent.trim();

  var defaultMessage = `Mám zájem o ${listingTitle}, číslo nabídky ${listingCode}.`;

  textareaElement.value = defaultMessage;
}

// show more

// Config
const limit = 580; // Change this to the number of characters you want to be visible initially
const moreText = 'Více informací';
const lessText = 'Ukázat méně';

// Get the content
const contentElement = document.querySelector('.text-rich-text.w-richtext p');
let content = contentElement.innerHTML;

if (content.length > limit) {
  const visibleContent = content.substr(0, limit);
  const hiddenContent = content.substr(limit);

  // Create elements
  const ellipsisSpan = `<span class="ellipsis">...</span>`;
  const hiddenSpan = `<span class="more-content" style="display:none;">${hiddenContent}</span>`;
  const button = `<button class="more-btn">${moreText}</button>`;

  // Update HTML
  contentElement.innerHTML = `${visibleContent}${ellipsisSpan}${hiddenSpan}${button}`;
}

document.querySelector('.more-btn')?.addEventListener('click', function () {
  const moreContent = this.previousElementSibling;
  const ellipsis = moreContent.previousElementSibling;
  const isContentHidden = moreContent.style.display === 'none';

  moreContent.style.display = isContentHidden ? 'inline' : 'none';
  ellipsis.style.display = isContentHidden ? 'none' : 'inline';
  this.innerHTML = isContentHidden ? lessText : moreText;
});
