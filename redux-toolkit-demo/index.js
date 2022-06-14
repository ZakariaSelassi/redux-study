const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const icecreamActions = require('./features/icecream/icecreamSlice').icecreamActions
const fetchUsers = require('./features/user/userSlice').fetchUsers
console.log("initial : ", store.getState())

// used this to listen any change
const unsubscribe = store.subscribe(() => {
    console.log("update : ", store.getState())
})

// dispatch actions on the store 
store.dispatch(fetchUsers())
unsubscribe()