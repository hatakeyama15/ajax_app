const buildHTML = (XHR) => {
  const item = XHR.response.post;
  const html = `
    <div class="post">
      <div class="post-date">
        投稿日時：${item.created_at}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;
  return html;
};

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
    XHR.onload = () => {  // リクエスト成功時に呼び刺し
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);  // 200以外のステータスコードをもらったら
        return null;
      };
      const list = document.getElementById("list");
      const formText = document.getElementById("content");  // form内のテキストを取得
      console.log(formText.value);
      // 投稿が実行された後のHTML表示
      const item = XHR.response.post;
      list.insertAdjacentHTML("afterend", buildHTML(XHR));
      formText.value = "";  // 値のリセット
    };
  });
 };
 
 window.addEventListener('turbo:load', post);