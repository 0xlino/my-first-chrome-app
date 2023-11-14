'use strict';

import './popup.css';

(function () {
  function setupButton() {
    document.getElementById('bensBtn').addEventListener('click', () => {
      console.log('button smashin222');

      chrome.runtime.sendMessage(
        {
          type: 'NEW_TAB',
          payload: {
            message: 'Hello, my name is Bennnn. I am from Popup.',
            url: 'https://www.google.com/',
          },
        },
        (response) => {
          console.log("logging as well");
          console.log(response.message);
        }
      );
    });
  }

  document.addEventListener('DOMContentLoaded', setupButton);
})();
