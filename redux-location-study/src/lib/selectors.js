import { createSelector } from 'reselect'

const shopItemsSelector = state => state.shop.items;
const taxPercentSelector = state => state.shop.taxPercent;
const testLoopSelector = state => state.shop.i;

export const subtotalSelector = createSelector(
  shopItemsSelector,
  items => items.reduce((acc, item) => acc + item.value, 0)
)

const taxSelector = createSelector(
  subtotalSelector,
  taxPercentSelector,
  (subtotal, taxPercent) => subtotal * (taxPercent / 100)
)

export const totalSelector = createSelector(
  subtotalSelector,
  taxSelector,
  (subtotal, tax) => ({ total: subtotal + tax })
)

export const loopSelecor = createSelector(
  testLoopSelector,
  item=>{
    let res = 0;
    for(let i = 0 ; i < item ; i++){
      res += 1;
    }
    return res;
  }
)

// console.log(subtotalSelector(exampleState)) // 2.15
// console.log(taxSelector(exampleState))      // 0.172
// console.log(totalSelector(exampleState)) 