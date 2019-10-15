const loggerMiddleware = store => next => action =>{
  // 현재 스토어 상태값 기록
  console.log(`현재 상태`, store.getState());
  // 액션 기록
  console.log(`액션`, action);
  // 액션을 다음 미들웨어, 혹은 리듀서로 넘김
  if(store.getState().counter.number >5){
    return null
  }
  const result = next(action);

  // 액션 처리 후의 스토어 상태 기록
  console.log(`다음 상태`, store.getState());
  console.log(`\n`);


  return result; // 여기서 반환하는 값은 store.dispatch(ACTION_TYPE) 했을때의 결과로 설정됩니다.
}
export default loggerMiddleware; // 불러와서 사용할 수 잇또록 내보내줍니다.