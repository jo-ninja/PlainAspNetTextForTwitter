"use strict";

window.browser = (() => {
  return window.chrome || window.browser;
})();

(() => {
  const CMD_COPY = "copy:AspNetText";
  const TXT_COPIED = "Copied!";

  const btnCopy = document.querySelector(".button.copy");
  btnCopy.onclick = () => {
    browser.tabs.query({ active: true, currentWindow: true }, tabs => {
      browser.tabs.sendMessage(tabs[0].id, {
        command: CMD_COPY
      });
    });
    btnCopy.textContent = TXT_COPIED;
  };
})();
