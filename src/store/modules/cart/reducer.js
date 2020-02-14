import produce from 'immer';

const INITIAL_STATE = [
  // products: [],
  // loading: false,
  // total: 0,
  // count: 0,
];

export default function cart(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@cart/ADD_SUCCESS': {
        const { product } = action;
        draft.push(product);
        // draft.count = products.
        break;
      }
      case '@cart/REMOVE': {
        const productIndex = draft.findIndex(p => p.id === action.id);
        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
        break;
      }
      case '@cart/UPDATE_AMOUNT_SUCCESS': {
        const productIndex = draft.findIndex(p => p.id === action.id);
        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
        break;
      }
      default:
    }
  });
}
