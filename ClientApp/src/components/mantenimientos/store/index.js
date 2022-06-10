// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// ** Axios Imports
import axios from 'axios'

export const getPersonas = createAsyncThunk(
  'personas/getProjects',
  async () => {
    const personas = await axios.get(`https://localhost:7124/api/personas`)
    return personas.data
  }
)
export const addPersona = createAsyncThunk(
  'personas/addPersona',
  async (data, {dispatch}) => {
    await axios.post(`https://localhost:7124/api/personas`, data).then((res)=>{
      return res.data
    }).catch(err => {
      console.log(`correo repetido`)
    })
    dispatch(getPersonas())
    return personas.data
  }
)
export const deletePersona = createAsyncThunk(
  'personas/deletePersona',
  async (id, {dispatch}) => {
    const personas = await axios.delete(`https://localhost:7124/api/personas/${id}`)
    dispatch(getPersonas())
    return personas.data
  }
)


export const personas = createSlice({
  name: 'personas',
  initialState: {  
    personas: [],
    
  },
  reducers: {

  },
  extraReducers: builder => {
    builder
    .addCase(getPersonas.fulfilled, (state, action) => {
      state.personas = action.payload

    })
  }
})

// export const { } = personas.actions

export default personas.reducer
