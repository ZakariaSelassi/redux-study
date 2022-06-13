const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions

console.log("initial : ", store.getState())


// used this to listen any change
const unsubscribe = store.subscribe(() => {
    console.log('updated : ', store.getState())
})

// dispatch actions on the store 
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(2))


unsubscribe()