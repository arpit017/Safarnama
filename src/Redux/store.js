import {legacy_createStore} from "redux"
import { myReducer } from "./myReducer"




export const myStore=legacy_createStore(myReducer)

// myStore.subscribe(()=>{
//     console.log(myStore.getState())
// })