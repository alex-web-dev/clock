export function addToStorage(item) {
  let corsine = getStorage();
  if (!corsine) {
    corsine = [];
    corsine.push(item);
  } else if (hasStorageItem(item.id)) {
    corsine = incStorageItem(item.id);
  } else {
    corsine.push(item);
  }

  setStorage(corsine);
}

export function deleteFromStorage(id) {
  const storage = getStorage();

  if(!storage) {
    return;
  }  

  const newStorage = storage.filter((item) => {
    return item.id !== id;
  });

  setStorage(newStorage);
}

export function incStorageItem(id) {
  const corsine = getStorage();
  const newCorsine = corsine.filter(item => {
    if (item.id === id) {
      item.count++;
    }

    return item;
  });

  return newCorsine;
  
}

export function hasStorageItem(id) {
  const storage = getStorage();

  if(!storage) {
    return;
  }

  for (let item of storage) {
    if(item.id === id) {
      return true;
    }
  }

  return false;
}

export function setStorage(corsine) {
  localStorage.setItem('corsine', JSON.stringify(corsine));
}

export function getStorage() {
  const storage = JSON.parse(localStorage.getItem('corsine'));

  return storage;
}

export function clearStorage() {
  localStorage.removeItem('corsine');
}

export function isStorageEmpty() {
  if (!localStorage.getItem('corsine')) {
    return false;
  }

  return true;
}

export function getStorageTotal() {
  const storage = getStorage();
  
  if(!storage) {
    return;
  }

  let totalPrice = 0;
  storage.forEach(item => {
    totalPrice += item.price * item.count;
  });

  return totalPrice;
}

export function getStorageCount() {
  const storage = getStorage();
  
  if(!storage) {
    return;
  }

  let count = 0;
  storage.forEach(item => {
    count += item.count;
  });

  return count;
}