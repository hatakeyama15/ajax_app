function post (){
  //リクエストを送信する処理
  // console.log("イベント発火"); // 確認用
  const form = document.getElementById("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("イベント発火"); // コンソール確認用
    const formData = new FormData(form);  // フォームデータの取得
    const XHR = new XMLHttpRequest(); // オブジェクトの取得
    XHR.open("POST", "/posts", true); // HTTPメソッド, パス, 非同期か？
    XHR.responseType = "json";  // レスポンスの形式
    XHR.send(formData); // フォームの内容をコントローラーに送信
  });
 };
 
 window.addEventListener('turbo:load', post);