// import { combineReducers } from 'redux';

// const rootReducer = combineReducers({
//   state: (state = {}) => state
// });

// export default rootReducer;

let defaultState={
    color:"red"
}

const mainReducer=(state=defaultState,action)=>{
    if(action.type==="CHANGE_COLOR"){
        return{
            ...state,
            color:action.color
        }
    } else{
        return{
            ...state
        }
    }
}

export default mainReducer;
