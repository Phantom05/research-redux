import React from 'react';
// import {Map, List, Seq,fromJS} from 'immutable';

const Counter = ( { number, onIncrement, onDecrement}) =>{
  // console.log('f');
  // let a = {
  //   test:10
  // };
  // console.log(a);
  // let b = Map({
  //   text:20
  // });
  // let ba = b.set('text',30);
  // console.log(ba.get('text'));
  // console.log(b.get('text'));

  // let list1 = List([1,2]);
  // let list2 = list1.push(3,4,5);
  // console.log(list1.get(2));
  // console.log(list2.get(3));
  
  // let list3 = List([1,2,3]);
  // let list4 = List([4,5,6]);
  // let array = [7,8,9];
  // console.log(
  //   list3.concat(list4,array).map(list=>list)
  // );

  // const oddSqueare = Seq([1,2,3,4,5,6,7,8])
  // .filter(x => x%2 !==0)
  // .map(x => x*x);
  // console.log(fromJS(oddSqueare));

  // console.log(
  //   fromJS(list3)
  // );

  // const obj ={1:'one',hello:'world'};

  // const map1 = fromJS(obj);
  // console.log(map1.get('1'));
  // let map2 =map1.mergeDeep({}).set('hello','im');

  // console.log(map1);
  // console.log(
  //   map2.toJS()
  // );

  // const nexted = fromJS({a:{b:{c:[3,4,5]}}});

  // const next2 = nexted.mergeDeep({a:{b:{d:6}}});

  //   console.log(next2.toJS());

  //   console.log(next2.getIn(['a','b','d']));
  // const nested3 = next2.updateIn(['a','b','d'], value => value +1);
  // console.log(nested3.toJS());

  return(
    <div>
      <h1>{number}</h1> 
      <button onClick={onIncrement}>증가 (+)</button>
      <button onClick={onDecrement}>감소 (-)</button>
    </div>
  )
};
Counter.defaultProps ={
  number:0
}

export default Counter;