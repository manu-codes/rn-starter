import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { DO_LOGIN, LOGIN_SUCCESS, LOGIN_ERROR } from '../actions/constants';
import axios from 'axios';

function* login(action) {
  try {
    const response = yield call(axios.get,
      'http://localhost:8080/',
      { params: { username: action.username, password: action.password } });

    yield put({ type: LOGIN_SUCCESS, data: response.data });
  } catch (e) {
    yield put({ type: LOGIN_ERROR, error: e.message });
  }
}
function* mySaga() {
  console.log('saga init..')
  yield takeLatest(DO_LOGIN, login);
}

export default mySaga;