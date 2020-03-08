
// import {combineReducers} from 'react-redux'
//file separation later when/if more functionality is added

const services = {
    info: {}
}

const serviceReducer = (state = services, action) => {
    switch(action.type){
        case 'ADD_info':
            return {...state, info: action.payload}
        default:
            return state;
    }
}

export default serviceReducer;