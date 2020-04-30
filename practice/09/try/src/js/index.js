(function () {
  "use strict";

  const mainImageElement = document.getElementsByClassName("main-img")[0];
  const imageElements = Array.from(
    document.getElementsByClassName("thumb-item-img")
  );

  const getLargeImage = (elm) => {
    return elm.getAttribute("src").replace("small", "large");
  };

  const clearActive = () => {
    imageElements.map((elm) => elm.classList.remove("is-active"));
  };

  const onHover = (elm) => {
    let largeSource = getLargeImage(elm);

    return () => {
      mainImageElement.setAttribute("src", largeSource);
      clearActive();
      elm.classList.add("is-active");
    };
  };

  imageElements.map((elm) => elm.addEventListener("mouseenter", onHover(elm)));
})();
