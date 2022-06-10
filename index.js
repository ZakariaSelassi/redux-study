
const redux = require('redux')

// redux createstore
const createStore = redux.createStore
 // Exercice 1 :  Restocking Cakes

 // Everyday , a vendor comes to the shop to restock the shelves with cakes.
 // The vendor can stock up one or more number of cakes depending on the previous day sales.

// Step 1 : Define action

const CAKE_ORDERED = 'CAKE_ORDERED'

const orderCake = () => {
    return {
        type: CAKE_ORDERED,
        payload:1
    }
    
}
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';

const restockCake = (qty = 1) => {
    return {
        type : CAKE_RESTOCKED,
        payload:qty,
    }
}

// Step 2 : set initial State
// define initialState 
const initialState = {
    numOfCakes:10,

}

 // reducer accepts a state as an argument and return the next state of an application
 const reducer = (  state = initialState, action) => {
     
    switch(action.type){
        case CAKE_ORDERED :
                // return new state of application as an object  
                return {
                    ...state, // first make a copy an then make an update 
                    numOfCakes: state.numOfCakes - 1
                }
        case CAKE_RESTOCKED : 
                return {
                    ...state,
                    numOfCakes: state.numOfCakes + action.payload
                }
        default : 
                return state
    }
 }


// hold application state
 const store = createStore(reducer) // creating store method that accepts reducer (initialState)
 console.log('init state  ', store.getState())

 // Listener that check each time the state of the application changes
 const unsubscribe = store.subscribe(() => console.log("update state :" , store.getState()))

 store.dispatch(orderCake())
 store.dispatch(orderCake())
 store.dispatch(orderCake())
 store.dispatch(restockCake(4))
 unsubscribe();

