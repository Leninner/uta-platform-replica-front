import { createSlice } from '@reduxjs/toolkit'

export interface IAsideState {
 isOpen: boolean
}

const initialState: IAsideState = {
  isOpen: false,
}


export const asideSlice = createSlice({
  name: 'aside',
  initialState,
  reducers: {
    closeAside: () => ({
      isOpen: false,
    }), 
    setAside:  () => ({
      isOpen: true,  
    })
  },
})

export const { closeAside, setAside } = asideSlice.actions

export default asideSlice.reducer
