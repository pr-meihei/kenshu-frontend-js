(function () {
  "use strict";

  const inputElement = document.getElementById("input");

  function onKeyUp(elm) {
    const textElement = document.getElementById("text");
    return () => {
      textElement.innerHTML = /yes/.test(elm.value) ? elm.value : "";
    };
  }

  inputElement.addEventListener("keyup", onKeyUp(inputElement));
})();
