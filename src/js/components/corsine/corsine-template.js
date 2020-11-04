import {addToCorsine, dltFromCorsine, getCorsine} from './corsine-storage';

window.addEventListener('load', () => {
  const $addCorsineBtns = document.querySelectorAll('.product__btn-icon');
  $addCorsineBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const product = btn.closest('.product');
      const corsineItemData = {
        id: product.dataset.id,
        name: product.querySelector('.product__name').innerHTML,
        thumb: product.querySelector('.product__img').getAttribute('src'),
        price: product.querySelector('.product__price-value').innerHTML,
        count: 1
      }
      
      addItemToCorsineTemplate(corsineItemData)
    });
  });

  const $corsine = document.querySelector('.corsine');
  const $corsineList = $corsine.querySelector('.corsine__list');
  const corsineStorage = getCorsine();
  
  if(corsineStorage) {
    corsineStorage.forEach(itemData => {
      const $corsineItem = createTemplateCorsineItem(itemData);
      
      $corsineList.append($corsineItem);
    });
  }
});

function addItemToCorsineTemplate(data) {
  addToCorsine(data);
  const $corsineItem = createTemplateCorsineItem(data);
  const $corsine = document.querySelector('.corsine');
  const $corsineList = $corsine.querySelector('.corsine__list');

  $corsineList.appendChild($corsineItem);
}

function createTemplateCorsineItem(itemData) {

  const $corsineItem = document.createElement('div');
  $corsineItem.className = 'corsine__item';
  $corsineItem.setAttribute('data-id', itemData.id);

  const $itemDltBtn = document.createElement('button');
  $itemDltBtn.className = 'corsine__item-dlt';
  $itemDltBtn.innerHTML = 'X';

  $itemDltBtn.addEventListener('click', () => {
    const $corsineItem = $itemDltBtn.closest('.corsine__item');
    const itemId = $corsineItem.dataset.id;
    dltFromCorsine(itemId);
    dltTemplateCorsineItem(itemId);
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

function dltTemplateCorsineItem(id) {
  const $corsine = document.querySelector('.corsine');
  const $corsineItem = $corsine.querySelector(`.corsine__item[data-id="${id}"]`);

  $corsineItem.remove();
}