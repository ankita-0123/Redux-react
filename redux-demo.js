const redux = require('redux');

const counterReducer = (state={counter:5},action) => {
    if(action.type==='increment') {
        return{
            counter:state.counter+1
        };

    }
    if(action.type==='decrement'){
        return {
            counter:state.counter-1
        }
    }
    return state
    
};

const store = redux.createStore(counterReducer);
console.log(store.getState());

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState)
}
store.subscribe(counterSubscriber);
store.dispatch({type:'increment'});
store.dispatch({type:'increment1'})
store.dispatch({type:'increment2'})
store.dispatch({type:'increment3'})
store.dispatch({type:'increment4'})
store.dispatch({type:'increment5'})
store.dispatch({type:'decrement'})