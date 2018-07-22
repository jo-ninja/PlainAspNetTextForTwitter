"use strict";

window.browser = (() => {
  return window.chrome || window.browser;
})();

(() => {
  const ASP_NET = "ASP​.NET";
  const CMD_COPY = "copy:AspNetText";
  const ALT_TITLE = 'Copy "ASP.NET" text to clipboard';
  const TXT_COPIED = "Copied!";

  const copyTextToClipboard = txt => {
    const txtArea = document.createElement("textarea");
    txtArea.textContent = txt;
    document.body.appendChild(txtArea);
    txtArea.select();
    document.execCommand("copy");
    document.body.removeChild(txtArea);
  };

  browser.runtime.onMessage.addListener(message => {
    if (message.command === CMD_COPY) {
      copyTextToClipboard(ASP_NET);
    }
  });

  const div = document.createElement("div");
  div.style.position = "fixed";
  div.style.top = 0;
  div.style.right = 0;
  div.style.zIndex = 1000;
  div.style.backgroundColor = "#FFFF00";
  div.style.opacity = 0.5;
  div.style.cursor = "pointer";
  div.textContent = ASP_NET;
  div.title = ALT_TITLE;

  div.onclick = e => {
    copyTextToClipboard(ASP_NET);
    div.textContent = TXT_COPIED;
    setTimeout(() => {
      div.textContent = ASP_NET;
    }, 3000);
  };
  document.body.appendChild(div);
})();
