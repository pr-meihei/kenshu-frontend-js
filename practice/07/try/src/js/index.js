(function () {
  "use strict";

  const formElement = document.getElementById("form");
  const errorElement = document.getElementById("error");

  const isEmpty = (elm) => {
    return elm.value === "";
  };

  const existsEmptyValue = (array) => {
    return array.some((elm) => isEmpty(elm));
  };

  const validation = (form) => {
    const checkboxElement = form.term;
    const valiableElements = [form.name, form.mail, form.gender, form.age];
    const isValid = () => {
      return !existsEmptyValue(valiableElements) && checkboxElement.checked;
    };

    return (event) => {
      event.preventDefault(); // ボタンのsubmitを無効化

      if (isValid()) {
        form.submit();
      } else {
        errorElement.classList.add("is-active");
      }
    };
  };

  formElement.addEventListener("submit", validation(formElement));
})();
