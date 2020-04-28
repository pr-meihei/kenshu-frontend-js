(function () {
  "use strict";

  const buttonElement = document.getElementById("button");

  function onClick(_buttonElement) {
    const textTypeElement = document.querySelector(".text--type");
    const textClassElement = document.querySelector(".text--class");

    return () => {
      textTypeElement.innerHTML = _buttonElement.getAttribute("data-type");
      textClassElement.innerHTML = _buttonElement.getAttribute("class");
    };
  }

  buttonElement.addEventListener("click", onClick(buttonElement));
})();
