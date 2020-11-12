import {deleteFromStorage, getStorage, getStorageTotal, getStorageCount} from './corsine-storage';
const corsine = document.querySelector('.corsine');

export function incItem(id) {
  const $item = corsine.querySelector(`.corsine__item[data-id="${id}"]`);
  const $itemCount = $item.querySelector('.corsine__item-count-value');
  
  $itemCount.innerHTML = ++$itemCount.innerHTML;
}

export function appendItem(data) {
  const $corsineItem = getItemTemplate(data);
  const $corsine = document.querySelector('.corsine');
  const $corsineList = $corsine.querySelector('.corsine__list');

  $corsineList.appendChild($corsineItem);
  setTimeout(() => {
    $corsineItem.classList.remove('corsine__item_hide');
  });
}

function getItemTemplate(itemData) {
  const $corsineItem = document.createElement('div');
  $corsineItem.className = 'corsine__item corsine__item_hide';
  $corsineItem.setAttribute('data-id', itemData.id);

  const $itemDltBtn = document.createElement('button');
  $itemDltBtn.className = 'corsine__item-dlt';
  $itemDltBtn.innerHTML = 'X';

  $itemDltBtn.addEventListener('click', () => {
    const $corsineItem = $itemDltBtn.closest('.corsine__item');
    const itemId = +$corsineItem.dataset.id;
    
    deleteFromStorage(itemId);
    deleteItem(itemId);
  });

  $corsineItem.innerHTML = `
    <div class="corsine__item-bg">
      <img src="${itemData.thumb}" alt="${itemData.name}" class="corsine__item-img">
    </div>
    <div class="corsine__item-name">${itemData.name}</div>
    <div class="corsine__item-price">
        <span class="corsine__item-price-value">${itemData.price}</span> ₽
    </div>
    <div class="corsine__item-count"><span class="corsine__item-count-value">${itemData.count}</span> шт.</div>
  `;
  $corsineItem.appendChild($itemDltBtn);

  return $corsineItem;
}

export function updateTemplate() {
  const total = getStorageTotal();
  const count = getStorageCount();

  const $count = document.querySelector('.corsine__count-value');
  const $total = document.querySelector('.corsine__total-value');

  $count.innerHTML = count;
  $total.innerHTML = total;
}

function deleteItem(id) {
  const $corsine = document.querySelector('.corsine');
  const $corsineItem = $corsine.querySelector(`.corsine__item[data-id="${id}"]`);

  $corsineItem.classList.add('corsine__item_hide');
  $corsineItem.addEventListener('transitionend', () => {
    $corsineItem.remove();
  });

  updateTemplate();
}

export function createCorsine() {
  const $corsine = document.querySelector('.corsine');
  const $corsineList = $corsine.querySelector('.corsine__list');
  const storage = getStorage();

  if(!storage) {
    return;
  }
  
  storage.forEach(itemData => {
    appendItem(itemData);
  });
  
  updateTemplate();
}