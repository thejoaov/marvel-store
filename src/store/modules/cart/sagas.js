import { put, select, all, takeLatest } from 'redux-saga/effects';
import { addToCartSuccess, updateAmountSuccess } from './actions';
import history from '../../../services/history';

function* addToCart(product) {
  const productExists = yield select(state =>
    state.cart.find(p => p.id === product.id)
  );

  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;

  if (productExists) {
    yield put(updateAmountSuccess(product.id, amount));
  } else {
    const data = {
      ...product,
      amount: 1,
    };

    yield put(addToCartSuccess(data));
    history.push('/cart');
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  yield put(updateAmountSuccess(id, amount));
}
export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_REQUEST', updateAmount),
]);
