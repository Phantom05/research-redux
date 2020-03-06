import { createSelector } from 'reselect'

const LoopSelecor = state => state.list;

export const loopSelecor = createSelector(
  LoopSelecor,
  item=>{
    let newArr =[];
    if(item[0]){
      for(let i = 5; i--;){
        newArr.push(
          i + item[0].title
        )
      }
    }
    return newArr;
  }
)
