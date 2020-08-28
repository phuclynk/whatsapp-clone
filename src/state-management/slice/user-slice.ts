// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { userAPI } from '@root/api';

// // First, create the thunk
// const fetchUserById = createAsyncThunk(
//     'users/fetchByIdStatus',
//     async (userId: string, thunkAPI) => {
//         const response = await userAPI.getById(userId);
//         return response.data;
//     }
// );

// // Then, handle actions in your reducers:
// export const usersSlice = createSlice({
//     name: 'users',
//     initialState: { entities: [], loading: 'idle' },
//     reducers: {
//     // standard reducer logic, with auto-generated action types per reducer
//     },
//     extraReducers: {
//     // Add reducers for additional action types here, and handle loading state as needed
//         [fetchUserById.fulfilled]: (state, action) => {
//             // Add user to the state array
//             state.entities.push(action.payload);
//         }
//     }
// });

// // Later, dispatch the thunk as needed in the app
// // dispatch(fetchUserById(123));