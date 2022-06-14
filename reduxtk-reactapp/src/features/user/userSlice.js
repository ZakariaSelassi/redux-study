import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    loading : false,
    user : [],
    error:''
}

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    return response.data;
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

export default userSlice.reducer
