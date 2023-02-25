import { createSlice } from "@reduxjs/toolkit";

//const DEFAULT_CITY = 'Москва';
//const DEFAULT_DATE = new Date().toISOString().split('T')[0];

const initialState = {
  items: [],
  isLoading: false,
  sliders: ['slider1', 'slider2', 'slider3', 'slider4'],
  favoriteItems: [],
  favoriteCount: 0,
 /// cityName: DEFAULT_CITY,
  ///date: DEFAULT_DATE
}

export const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {
    getHotelSucess(state, action) {   
      state.items = action.payload
      state.isLoading = false;
    },
    getHotelfetch(state) {
      state.isLoading = true;
    },
    getHotelfail(state) {
      state.isLoading = false;
    },

    addToFavorite(state, action) {
      const findItem = state.favoriteItems.find(_ => _.id === action.payload.id);
      const findItemById = state.items.find(_ => _.id === action.payload.id);
      if (findItem) {
        state.favoriteItems = state.favoriteItems.filter( el => el.id !== action.payload.id)
        state.favoriteCount--;
        findItemById.isFavorite = false;
      } else {
        state.favoriteItems = [
          ...state.favoriteItems,
          action.payload,
        ]
        state.favoriteCount++;
        findItemById.isFavorite = true;
      }
    }
  }
});

export const { getHotelSucess, getHotelfetch, getHotelfail, addToFavorite } = hotelSlice.actions;
export default hotelSlice.reducer;