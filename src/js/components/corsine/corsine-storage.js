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

export function dltFromStorage(id) {
  const corsine = getStorage();
  if(!corsine) {
    return;
  }  

  const newCorsine = corsine.filter((item) => {
    return item.id !== id;
  });

  setStorage(newCorsine);
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
  const corsine = getStorage();

  for (let item of corsine) {
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
  const corsine = JSON.parse(localStorage.getItem('corsine'));

  return corsine;
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