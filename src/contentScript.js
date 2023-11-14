'use strict';

// get clipboard data
let clipTextString = '';
navigator.clipboard.readText().then((clipText) => {
  // if it's not a github url, return alert()
  if (!clipText.includes('github.com')) {
    alert('Not a github url');
    return;
  }

  // if the clipboard url is like https://github.com/findify/findify-liquid-components/tree/main remove the /tree/main
  if (clipText.includes('/tree/main')) {
    clipText = clipText.split('/tree/main')[0];
  }

  // // console.log(clipText);
  clipTextString = clipText;

  var radioButton = document.getElementById(':r7:');
  radioButton.click();
  radioButton.checked = true;

  var inputElement = document.getElementById(':r1:');

  // Set the value of the input field
  inputElement.value = clipTextString;

  // https://github.com/WTNO/Evm_Js_Learning
  const repoNameString = clipTextString.split("/").pop();

  var inputEvent = new Event('input', { bubbles: true });
  inputElement.dispatchEvent(inputEvent);

  var reponame = document.getElementById(':r4:');
  reponame.value = repoNameString;

  var repoNameEvent = new Event('input', { bubbles: true });
  reponame.dispatchEvent(repoNameEvent);
})

