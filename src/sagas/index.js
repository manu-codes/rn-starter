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
    yield put({ type: LOGIN_ERROR, message: e.message });
  }




}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
// function* mySaga() {
//   yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
// }

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
  console.log('saga init..')
  yield takeLatest(DO_LOGIN, login);
}

export default mySaga;