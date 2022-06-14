import { configureStore } from '@reduxjs/toolkit'
import cakeReducer from "../features/cake/cakeSlice"
import icecreamReducer from "../features/icecream/icecreamSlice"
import userReducer from "../features/user/userSlice"

// reduxtoolkit configureStore handle combine reducer
const store = configureStore({
    reducer:{
        cake:cakeReducer,
         icecream: icecreamReducer,
        user: userReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),   
})

// simply creating the store an attached all the reducers here
export default store;