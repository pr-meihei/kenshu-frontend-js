(function () {
  "use strict";

  const formElement = document.getElementById("form");
  const buttonElement = document.getElementById("button");
  const nameElement = document.getElementById("name");
  const nameTextElement = document.getElementById("name-text");
  const genderTextElement = document.getElementById("gender-text");
  const textWrapperElement = document.getElementById("text-wrapper");

  const escapeHtml = (str) => {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  };

  const onClick = () => {
    nameTextElement.innerHTML = escapeHtml(nameElement.value);
    genderTextElement.innerHTML = formElement.gender.value;
    textWrapperElement.classList.add("is-active");
  };

  buttonElement.addEventListener("click", onClick);
})();
