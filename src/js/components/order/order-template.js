const orderClass = 'order';

function getOrderTemplate() {
  const $order = document.createElement('div');
  $order.className = orderClass;
  $order.innerHTML = `
    <div class="order__content">
      <p class="order__title">Оформление заказа</p>
      <div class="order-form">
          <label class="order-form__label">
              <p class="order-form__text">Имя</p>
              <input type="text" class="order-form__field">
          </label>
          <label class="order-form__label">
              <p class="order-form__text">Номер телефона</p>
              <input type="text" class="order-form__field">
          </label>
          <label class="order-form__label">
              <p class="order-form__text">Адрес</p>
              <input type="text" class="order-form__field">
          </label>
          <button class="btn btn_black order-form__submit">Оформить заказ</button>
      </div>
    </div>
    <div class="order__bg"></div>`;

  return $order;
}

export function removeOrderTemplate() {
  const $order = document.querySelector(`.${orderClass}`);

  if(!$order) {
    return;
  }
  
  $order.remove();
}

export function addOrderTemplate() {
  document.body.appendChild(getOrderTemplate());

  const $order = document.querySelector(`.${orderClass}`);
  $order.addEventListener('click', e => {
    if(e.target.className.includes(`${orderClass}__bg`)) {
      removeOrderTemplate();
    }
  }); 
}