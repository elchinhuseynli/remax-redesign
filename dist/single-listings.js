"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/single-listings.ts
  document.body.style.backgroundColor = "red";
})();
//# sourceMappingURL=single-listings.js.map
