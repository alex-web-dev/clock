import {appendItem, incItem, updateTemplate} from '../corsine/corsine-template';
import {hasStorageItem, addToStorage} from '../corsine/corsine-storage';

window.addEventListener('load', function() {
  const $addCorsineBtns = document.querySelectorAll('.product__btn-icon');
  $addCorsineBtns.forEach(btn => {
    btn.addEventListener('click', addCorsineItemEvent);    
  });
});

function addCorsineItemEvent() {
  const $product = this.closest('.product');
  const itemData = getProductData($product);
  
  if(hasStorageItem(itemData.id)) {
    incItem(itemData.id);
  } else {
    appendItem(itemData);
  }
  addToStorage(itemData);

  updateTemplate();
}

export function getProductData($product) {
  return {
    id: +$product.dataset.id,
    name: $product.dataset.name,
    thumb: $product.dataset.thumb,
    price: +$product.dataset.price,
    count: 1
  }
}