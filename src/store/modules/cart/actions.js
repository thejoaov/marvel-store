export function addRequest(product) {
  return {
    type: '@cart/ADD_REQUEST',
    payload: { product },
  };
}

export function add(product) {
  return {
    type: '@cart/ADD',
    payload: { product },
  };
}

export function remove(id) {
  return {
    type: '@cart/REMOVE',
    payload: { id },
  };
}

export function update(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    payload: { id, amount },
  };
}
