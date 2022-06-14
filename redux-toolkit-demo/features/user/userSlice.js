const { default: axios } = require('axios')

const createSlice = require('@reduxjs/toolkit').createSlice
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk
initialState = {
    loading : false,
    user : [],
    error:''
}

const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    return response.data.map(user => user.id)
})

const userSlice = createSlice({
    name:'user',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled,(state,action) => {
            state.user = action.payload
            state.loading = false
        })
        builder.addCase(fetchUsers.rejected,(state,action) => {
            state.error = action.error.message
            state.loading = false
        })
    }
})

module.exports = userSlice.reducer
module.exports.fetchUsers = fetchUsers