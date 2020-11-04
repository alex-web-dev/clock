export function addToCorsine(item) {
  let corsine = getCorsine();
  
  if (!corsine) {
    corsine = [];
    corsine.push(item);
  } else if (hasCorsineItem(item.id)) {
    corsine = incCorsineItem(item.id);
  } else {
    corsine.push(item);
  }

  setCorsine(corsine);
  console.log(getCorsine());
}

export function dltFromCorsine(id) {
  const corsine = getCorsine();
  if(!corsine) {
    return;
  }  

  const newCorsine = corsine.filter((item) => {
    return item.id !== id;
  });

  setCorsine(newCorsine);
}

export function incCorsineItem(id) {
  const corsine = getCorsine();
  const newCorsine = corsine.filter(item => {
    if (item.id === id) {
      item.count++;
    }

    return item;
  });

  return newCorsine;
  
}

export function hasCorsineItem(id) {
  const corsine = getCorsine();

  for (let item of corsine) {
    if(item.id === id) {
      return true;
    }
  }

  return false;
}

export function setCorsine(corsine) {
  localStorage.setItem('corsine', JSON.stringify(corsine));
}

export function getCorsine() {
  const corsine = JSON.parse(localStorage.getItem('corsine'));

  return corsine;
}

export function clearCorsine() {
  localStorage.removeItem('corsine');
}

export function isEmptyCorsine() {
  if (!localStorage.getItem('corsine')) {
    return false;
  }

  return true;
}