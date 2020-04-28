(function () {
  "use strict";

  // data
  const company = {
    company_id: 1234,
    company_name: "会社名",
    test: "aaa",
  };
  const article = {
    article_id: 9876,
    article_title: "タイトル",
  };

  // function
  const main = (_company, _article) => {
    console.log(_company);
    console.log(_article);
    const assignedObject = Object.assign(_company, _article);
    console.log(assignedObject);
  };

  main(company, article);
})();
