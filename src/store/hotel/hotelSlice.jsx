import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  items: [],
  isLoading: false,
  sliders: ['slider1', 'slider2', 'slider3'],
  favoriteItems: [],
  favoriteCount: 0
}

export const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {
    getHotelSucess(state, action) {   ///типизировать!!!
      state.items = action.payload
      state.isLoading = false;
    },
    getHotelfetch(state, action) {
      // console.log(action.payload)
      state.isLoading = true;
    },
    getHotelfail(state) {
      state.isLoading = false;
    },

    addToFavorite(state, action) {
      const findItem = state.favoriteItems.find(_ => _.id === action.payload.id);
      if (findItem) {
        console.log('minus')
        state.favoriteItems = state.favoriteItems.filter( el => el.id !== action.payload.id)
        state.favoriteCount--;
      } else {
        state.favoriteItems = [
          ...state.favoriteItems,
          action.payload,
        ]
        state.favoriteCount++;
      }
    }
  }
});

export const { getHotelSucess, getHotelfetch, getHotelfail, addToFavorite } = hotelSlice.actions;
export default hotelSlice.reducer;