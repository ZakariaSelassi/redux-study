
const redux = require('redux')
const bindActionCreators = redux.bindActionCreators
const createStore = redux.createStore
const combineReducers = redux.combineReducers
 // Exercice 1 :  Restocking Cakes

 // Everyday , a vendor comes to the shop to restock the shelves with cakes.
 // The vendor can stock up one or more number of cakes depending on the previous day sales.

// Step 1 : Define action

const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';

const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'

const orderCake = () => {
    return {
        type: CAKE_ORDERED,
        payload:1
    }
    
}

const restockCake = (qty = 1) => {
    return {
        type : CAKE_RESTOCKED,
        payload:qty,
    }
}

const orderIceCream = (qty = 1) => {
    return {
        type: ICECREAM_ORDERED,
        payload: qty
    }

}
const restockIceCream = (qty = 1) => {
    return {
        type: ICECREAM_RESTOCKED,
        payload: qty
    }
}

// Step 2 : set initial State
// define initialState 
/* const initialState = {
    numOfCakes:10,
    numOfIceCreams:20,
} */

const initialCakeState = {
    numOfCakes:10,
}

const initialIceCreamState = {
    numOfIceCreams:20,
}
 // reducer accepts a state as an argument and return the next state of an application
 const cakeReducer = (  state = initialCakeState, action) => {
    
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

 const iceCreamReducer = (  state = initialIceCreamState, action) => {
    switch(action.type){
        case ICECREAM_ORDERED :
        // return new state of application as an object  
                return {
                    ...state, // first make a copy an then make an update 
                    numOfIceCreams: state.numOfIceCreams - 1
                }
        case ICECREAM_RESTOCKED : 
                return {
                    ...state,
                    numOfIceCreams: state.numOfIceCreams + action.payload
                }
        default : 
                return state
    }
 }

// using combineReducer allow to put multipe reducer inside create store , default createstore allow only single reducer passing in
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
// hold application state
 const store = createStore(rootReducer) // creating store method that accepts reducer (initialState)
 console.log('init state  ', store.getState())

 // Listener that check each time the state of the application changes
 const unsubscribe = store.subscribe(() => console.log("update state :" , store.getState()))

 const actions = bindActionCreators({
     orderCake,restockCake,
    orderIceCream,restockIceCream
 },store.dispatch)

 actions.orderCake()
 actions.orderCake()
 actions.orderCake()
 actions.orderIceCream()
 actions.orderIceCream()
 actions.restockIceCream(2)
 unsubscribe();

