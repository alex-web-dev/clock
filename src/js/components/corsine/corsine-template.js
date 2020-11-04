import {addToStorage, dltFromStorage, getStorage, hasStorageItem} from './corsine-storage';
const corsine = document.querySelector('.corsine');

export function incItem(id) {
  const $item = corsine.querySelector(`.corsine__item[data-id="${id}"]`);
  const $itemCount = $item.querySelector('.corsine__item-count-value');
  
  $itemCount.innerHTML = ++$itemCount.innerHTML;
}

export function appendItem(data) {
  const $corsineItem = createItem(data);
  const $corsine = document.querySelector('.corsine');
  const $corsineList = $corsine.querySelector('.corsine__list');

  $corsineList.appendChild($corsineItem);
}

function createItem(itemData) {
  const $corsineItem = document.createElement('div');
  $corsineItem.className = 'corsine__item';
  $corsineItem.setAttribute('data-id', itemData.id);

  const $itemDltBtn = document.createElement('button');
  $itemDltBtn.className = 'corsine__item-dlt';
  $itemDltBtn.innerHTML = 'X';

  $itemDltBtn.addEventListener('click', () => {
    const $corsineItem = $itemDltBtn.closest('.corsine__item');
    const itemId = $corsineItem.dataset.id;
    dltFromStorage(itemId);
    dltItem(itemId);
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

function dltItem(id) {
  const $corsine = document.querySelector('.corsine');
  const $corsineItem = $corsine.querySelector(`.corsine__item[data-id="${id}"]`);

  $corsineItem.remove();
}

export function getProductData($product) {
  return {
    id: $product.dataset.id,
    name: $product.querySelector('.product__name').innerHTML,
    thumb: $product.querySelector('.product__img').getAttribute('src'),
    price: $product.querySelector('.product__price-value').innerHTML,
    count: 1
  }
}

export function createCorsine() {
  const $corsine = document.querySelector('.corsine');
  const $corsineList = $corsine.querySelector('.corsine__list');
  const corsineStorage = getStorage();
  
  if(corsineStorage) {
    corsineStorage.forEach(itemData => {
      const $corsineItem = createItem(itemData);
      $corsineList.append($corsineItem);
    });
  }
}