
// import {createAction,handleActions} from 'redux-actions';
import { delay } from "redux-saga";
import { takeEvery, put } from "redux/saga/effects";

function* ageUpAsync() {
  yield delay(4000);
  yield put({ type: "AGE_UP_ASYNC", value: 1 });
}

export function* watchAgeUp() {
  yield takeEvery("AGE_UP", ageUpAsync);
}


const initialState ={
  age:20
}


const reducer = (state=initialState, action) => {
  const newState = {...state};

  switch(action.type){
      case 'AGE_UP': 
          newState.age += action.value;
          break;

      case 'AGE_DOWN': 
          newState.age -= action.value;
          break;
  }
  return newState;
};

export default reducer;


// export default handleActions({

// },initialState)