let jsbook = {title: 'JavaScript入門', price: 2500, stock: 3};

document.getElementById('title').textContent = jsbook.title;
document.getElementById('price').textContent = jsbook.price + '円';
document.getElementById('stock').textContent = jsbook.stock;

//入力内容の取得とイベント
document.getElementById('form').onsubmit = function(event) {
  event.preventDefault();
  const search = document.getElementById('form').word.value;
  document.getElementById('output').textContent = `「${search}」の検索中...`;
};
