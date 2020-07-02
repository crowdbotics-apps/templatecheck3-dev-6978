import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth7683Saga from '../features/EmailAuth7683/redux/sagas';
import CalendarView7682Saga from '../features/CalendarView7682/redux/sagas';
import CalendarView7677Saga from '../features/CalendarView7677/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth7683Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}