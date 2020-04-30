(function () {
  "use strict";

  const inputElement = document.getElementById("input");

  const escapeHtml = (str) => {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  };

  const onKeyUp = (elm) => {
    const textElement = document.getElementById("text");
    return () => {
      textElement.innerHTML = /yes/.test(elm.value)
        ? escapeHtml(elm.value)
        : "";
    };
  };

  inputElement.addEventListener("keyup", onKeyUp(inputElement));
})();
