

import {delay} from 'redux-saga/effects'
import { put, takeEvery, all } from 'redux-saga/effects'

function* helloSaga() {
  yield console.log('Hello Sagas!');
}


function* incrementAfter2secs() {
  yield delay(2000)
  yield put({ type: 'INCREMENT' })
}

function* mySaga() {
  yield takeEvery('INCREMENT_ASYNC', incrementAfter2secs); 
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    mySaga()
  ])
} // 兩個 Generators 將會同時啟動