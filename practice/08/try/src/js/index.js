(function () {
  "use strict";

  const listElement = document.getElementById("list");

  const createListItemElement = (title, paragraph) => {
    const elm = document.createElement("li");
    elm.innerHTML = `<h3>${title}</h3><p>${paragraph}</p>`;
    return elm;
  };

  async function load() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    data.forEach((element) => {
      listElement.appendChild(
        createListItemElement(element.title, element.body)
      );
    });
  }

  load();
})();
