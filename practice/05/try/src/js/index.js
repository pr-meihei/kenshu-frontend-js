(function () {
  "use strict";

  const inputElement = document.getElementById("input");

  function escapeHtml(str) {
    str = str.replace(/&/g, "&amp;");
    str = str.replace(/</g, "&lt;");
    str = str.replace(/>/g, "&gt;");
    str = str.replace(/"/g, "&quot;");
    str = str.replace(/'/g, "&#39;");
    return str;
  }

  function onKeyUp(elm) {
    const textElement = document.getElementById("text");
    return () => {
      textElement.innerHTML = /yes/.test(elm.value)
        ? escapeHtml(elm.value)
        : "";
    };
  }

  inputElement.addEventListener("keyup", onKeyUp(inputElement));
})();
