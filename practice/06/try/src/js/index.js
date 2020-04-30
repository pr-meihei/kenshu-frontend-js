(function () {
  "use strict";

  const formElement = document.getElementById("form");
  const buttonElement = document.getElementById("button");
  const nameElement = document.getElementById("name");
  const nameTextElement = document.getElementById("name-text");
  const genderTextElement = document.getElementById("gender-text");
  const textWrapperElement = document.getElementById("text-wrapper");

  function escapeHtml(str) {
    str = str.replace(/&/g, "&amp;");
    str = str.replace(/</g, "&lt;");
    str = str.replace(/>/g, "&gt;");
    str = str.replace(/"/g, "&quot;");
    str = str.replace(/'/g, "&#39;");
    return str;
  }

  function onClick() {
    nameTextElement.innerHTML = escapeHtml(nameElement.value);
    genderTextElement.innerHTML = formElement.gender.value;
    textWrapperElement.classList.add("is-active");
  }

  buttonElement.addEventListener("click", onClick);
})();
