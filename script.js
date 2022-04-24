let listElement = document.querySelector('#infinite-list');

let nextItem = 1;
let loadMore = function() {
  for (let i = 0; i < 20; i++) {
    let item = document.createElement('li');
    item.innerText = 'Item Number ' + nextItem++;
    listElement.appendChild(item);
  }
}

listElement.addEventListener('scroll', function() {
  if (listElement.scrollTop + listElement.clientHeight >= listElement.scrollHeight) {
    loadMore();
  }
});

loadMore();
