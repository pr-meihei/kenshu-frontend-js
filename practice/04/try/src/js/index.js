(function () {
  "use strict";

  const buttonElements = document.getElementsByClassName("button");

  const onClick = (elm) => {
    const listElement = elm.nextElementSibling;
    return () => {
      listElement.classList.toggle("is-active");
    };
  };

  for (let i = 0; i < buttonElements.length; i++) {
    let button = buttonElements[i];
    button.addEventListener("click", onClick(button));
  }
})();
