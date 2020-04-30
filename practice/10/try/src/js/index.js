(function () {
  "use strict";

  const WIDTH = "400px";

  const listElement = document.getElementsByClassName("list")[0];
  const listItemElements = Array.from(document.getElementsByClassName("item"));
  const listItemElements_ = listItemElements.map((elm) => elm.cloneNode(true)); // ローテーション用の追加リスト
  const nextButtonElement = document.getElementsByClassName("next")[0];
  const prevButtonElement = document.getElementsByClassName("prev")[0];

  const rotateController = function () {
    // リストの回転状態を管理するオブジェクト
    // Hint: ２倍の長さの配列を用意し、インデックスを変化させることで回転状態の管理を行う

    let _topi = 0; // HTML上で先頭になる要素のインデックス
    let _list = listItemElements.concat(listItemElements_); // このオブジェクトで管理するリスト要素の配列
    let _task; // 時間差で実行する用の関数を入れておく変数
    let _length = _list.length;
    this.rotateRight = () => {
      // 要素を１つずつ右にずらす
      let _tmp = _topi;
      _topi = (_tmp - 1 + _length) % _length; // マイナスの剰余ができない
      listElement.insertBefore(_list[_topi], _list[_tmp]);
    };
    this.rotateLeft = () => {
      // 要素を１つずつ左にずらす
      listElement.appendChild(_list[_topi]);
      _topi = (_topi + 1) % _length;
    };
    this.setTask = (_t) => (_task = _t);
    this.do = () => _task();
  };

  const onClick = (vec, controller) => {
    let move = vec === "next" ? "-" + WIDTH : WIDTH;
    let task = vec === "next" ? controller.rotateLeft : controller.rotateRight;
    return () => {
      listElement.classList.add("is-transition");
      listElement.style.marginLeft = move;
      controller.setTask(task);
    };
  };

  const endTransition = (controller) => {
    return () => {
      listElement.classList.remove("is-transition");
      controller.do();
      listElement.style.marginLeft = "0";
    };
  };

  listItemElements_.map((elm) => listElement.appendChild(elm));
  listElement.style.left = "-" + WIDTH;
  const c = new rotateController();
  c.rotateRight();

  nextButtonElement.addEventListener("click", onClick("next", c));
  prevButtonElement.addEventListener("click", onClick("prev", c));
  listElement.addEventListener("transitionend", endTransition(c));
})();
