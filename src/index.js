import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import serviceReducer from './reducer/root'

function saveStore(state){
    try{
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    }catch(e){
        console.log(e)
    }
}
function loadToStore(){
    try{
        const serializedState = localStorage.getItem('state')
        if(serializedState === null) return undefined
            return JSON.parse(serializedState)
    }catch(e){
        console.log(e)
        return undefined
    }
}
const persist = loadToStore()
const store = createStore(serviceReducer, persist);
store.subscribe(() => saveStore(store.getState()))
console.log(store.getState());
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));



