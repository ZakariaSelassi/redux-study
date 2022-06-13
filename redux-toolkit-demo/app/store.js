const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('../features/cake/cakeSlice')
const store = configureStore({
    reducer:{
        cake:cakeReducer,
    }
    
})

// simply creating the store an attached all the reducers here
module.exports = store;