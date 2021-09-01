import { createStore } from "redux"
import plantReducer from './plantReducer'



const store = createStore(plantReducer)
console.log(store.getState());

export default store