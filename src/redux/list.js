import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  field: "Lorem ipusm",
  items: [
    "hello",
    "ciao"
  ]
}

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    define: (state, action) => {
        state.field = action.paylpad
      },
      add: (state, action) =>{
        state.items.push(action.payload)
      },
      remove: (state, action)=>{
      state.items.splice(action,1)
  }
},
})


export const { define, add, remove } =listSlice.actions

export default listSlice.reducer