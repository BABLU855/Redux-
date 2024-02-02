// import {createstore} from "react"
// const initialstate = {
//     balance:0,
//     FullName:"",
//     MobileNo:null,
    
// } 
// // Above is the state which has some object information Now if we want to modify this state we use reducer function

// function accountreducer(state=initialstate,action){
//     if(action.type=="deposit")
//         return{...state,balance:state.balance+action.payload};
//         else if(action.type=="withdraw")
//         return{...state,balance:state.balance-action.payload};
//         else if(action.type=="nameUpdate")
//         return{...state,fullName:action.payload };
        
    

// }

// // dispatch({type:"deposit",payload:1000})
// // dispatch({type:"withdraw",payload:1000})
// // dispatch({type:"nameupdate",payload:bablu})
// // what ever we pass in dispatch function reducer will consider as 2nd input
// //we update state by based on type & what need to update in state based on that we right logic 

// const store= createstore(accountreducer)
// console.log(store.getState())

// store.dispatch({type:"deposit",payload:1000})
// console.log(store.getState())

// store.dispatch({type:"withdraw",payload:10})
// console.log(store.getState())
// // this function automatically accepts previous state & it will take additional data by consider those 2 it will 
// // generate new state we need to map above both initial state & reducer in redux library by using create store 
// // we map it
import { createStore } from "redux";

const initialState = {
    balance: 0,
    fullName: "Pinky",
    mobileNo: 9347575227,
};

function accountReducer(state = initialState, action) {
    if (action.type === "deposit")
        return { ...state, balance: state.balance + action.payload };
    else if (action.type === "withdraw")
        return { ...state, balance: state.balance - action.payload };
    else if (action.type === "nameUpdate")
        return { ...state, fullName: action.payload };
    else if (action.type === "mobileNo")
        return { ...state, mobileNo: action.payload };
    else
    return state
}

const store = createStore(accountReducer);

export default store


// console.log(store.getState());

// store.dispatch({ type: "deposit", payload: 1000 });
// console.log(store.getState());

// store.dispatch({ type: "withdraw", payload: 10 });
// console.log(store.getState());

// store.dispatch({ type: "mobileNo", payload: 9989255407 });
// console.log(store.getState());

// store.dispatch({ type: "nameUpdate", payload: "bablu" });
// console.log(store.getState());
