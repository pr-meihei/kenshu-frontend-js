(function () {
  "use strict";

  const buttonElement = document.getElementById("button");
  const modalOverlayElement = document.getElementById("modal-overlay");
  const modalContentElement = document.getElementById("modal-content");
  const modalCloseElement = document.getElementById("modal-close");

  const activateModal = () => {
    modalOverlayElement.classList.add("is-active");
    modalContentElement.classList.add("is-active");
  };

  const deactivateModal = () => {
    modalOverlayElement.classList.remove("is-active");
    modalContentElement.classList.remove("is-active");
  };

  buttonElement.addEventListener("click", activateModal);
  modalOverlayElement.addEventListener("click", deactivateModal);
  modalCloseElement.addEventListener("click", deactivateModal);
})();
