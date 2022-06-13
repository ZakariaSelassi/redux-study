const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numOfCakes: 10
}

// createSlice automaticly generate actions / reducers and updating directly the state because reduxToolkit handle immer too
const cakeSlice = createSlice({
    name:'cake',
    initialState: initialState,
    reducers:{
        ordered: (state,_action) => {
            state.numOfCakes--
        },
        restocked: (state,action) => {
            state.numOfCakes += action.payload
        },
    }

})

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions;