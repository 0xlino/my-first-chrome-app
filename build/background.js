/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/


chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  if (request.type === 'NEW_TAB'){
    // chrome.tabs.create({url: request.url});
    await chrome.tabs.create({
      url: "https://github.com/new/import"
    });

    sendResponse({
      message: 'new tab created',
    });
  }
});

/******/ })()
;
//# sourceMappingURL=background.js.map