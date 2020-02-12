import produce from 'immer';

const INITIAL_STATE = {
  products: [],
  loading: false,
  total: 0,
  count: 0,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@cart/ADD_REQUEST': {
        draft.products = [...draft.products, action.payload.product];
        draft.total += action.payload.product.prices[0].price;
        draft.count = draft.products.length;
        break;
      }
      case '@cart/ADD': {
        draft.products = [...draft.products, action.payload.product];
        draft.total += action.payload.product.prices[0].price;
        draft.count = draft.products.length;
        break;
      }
      default:
    }
  });
}
