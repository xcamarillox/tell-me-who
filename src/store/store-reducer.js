import { configureStore, createSlice } from "@reduxjs/toolkit"

initialState = {
    artistArr: undefined,
    artistInfo: undefined,
    moviesArr: undefined
}

const arrSlice = createSlice({
    name: 'dataArrays',
    initialState,
    reducers: {
        clearArr: (state, action) => {
            if (action.payload.type == 'artistArr')
                state.artistArr = undefined;
            else if (action.payload.type == 'artistInfo')
                state.artistInfo = undefined;
            else if (action.payload.type == 'moviesArr')
                state.moviesArr = undefined;
        },
        setArr: (state, action) => {
            if (action.payload.type == 'artistArr')
                state.artistArr = action.payload.data;
            else if (action.payload.type == 'artistInfo')
                state.artistInfo = action.payload.data;
            else if (action.payload.type == 'moviesArr')
                state.moviesArr = action.payload.data;
        },
    },
})

export const { clearArr, setArr } = arrSlice.actions
export default configureStore({ reducer: arrSlice.reducer })