'use strict';

import './popup.css';

(function () {
  function setupButton() {
    document.getElementById('bensBtn').addEventListener('click', () => {
      chrome.runtime.sendMessage(
        {
          type: 'NEW_TAB',
          payload: {
            message: 'Hello, my name is Bennnn. I am from Popup.',
            url: 'https://www.google.com/',
          },
        },
        (response) => {
          console.log(response.message);
        }
      );
    });
  }

  document.addEventListener('DOMContentLoaded', setupButton);
})();
