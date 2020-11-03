const productCorsineBtns = document.querySelectorAll('.product__btn-icon');
productCorsineBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const product = btn.closest('.product');
    
    const productData = {
      id: product.dataset.id,
      name: product.querySelector('.product__name').innerHTML,
      thumb: product.querySelector('.product__img').getAttribute('src'),
      price: product.querySelector('.product__price-value').innerHTML,
      count: 1
    }
    
    addToCorsine(productData);
    
  });
});

function addToCorsine(item) {
  let corsine = getCorsine();
  const newCorsineItem = item;
  
  if (!corsine) {
    corsine = [];
    corsine.push(newCorsineItem);
  } else if (hasCorsineItem(item.id)) {
    corsine = incCorsineItem(item.id);
  } else {
    corsine.push(newCorsineItem);
  }

  setCorsine(corsine);
}


function incCorsineItem(id) {
  const corsine = getCorsine();
  const newCorsine = corsine.filter(item => {
    if (item.id === id) {
      item.count++;
    }

    return item;
  });

  return newCorsine;
  
}

function setCorsine(corsine) {
  localStorage.setItem('corsine', JSON.stringify(corsine));
}

function decCorsineItem(id) {

}

function removeFromCorsine(item) {

}

function getCorsineItem(id) {

}

function hasCorsineItem(id) {
  const corsine = getCorsine();

  for (let item of corsine) {
    if(item.id === id) {
      return true;
    }
  }

  return false;
}

function getCorsine() {
  const corsine = JSON.parse(localStorage.getItem('corsine'));

  return corsine;
}

function clearCorsine() {
  localStorage.removeItem('corsine');
}

function logCorsine() {
  const corsine = JSON.parse(localStorage.getItem('corsine'));
  console.log(corsine);
}

function isEmptyCorsine() {
  if (!localStorage.getItem('corsine')) {
    return false;
  }

  return true;
}

clearCorsine();

logCorsine()