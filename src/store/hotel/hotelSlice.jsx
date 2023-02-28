import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_CITY, DEFAULT_DATE, DEFAULT_DAYS } from "./constants";

const initialState = {
  items: [],
  isLoading: false,
  sliders: ['slider1', 'slider2', 'slider3', 'slider4'],
  favoriteItems: [],
  favoriteCount: 0,
  bookingInfo: {
    city: DEFAULT_CITY,
    days: DEFAULT_DAYS,
    date: JSON.stringify(DEFAULT_DATE),
  },
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
      const findItem = state.favoriteItems.find(_ => _.hotelId === action.payload.hotelId);
      const findItemById = state.items.find(_ => _.hotelId === action.payload.hotelId);
      if (findItem) {
        state.favoriteItems = state.favoriteItems.filter( el => el.hotelId !== action.payload.hotelId)
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
    },

    setBookingInfo(state, action) {
      state.bookingInfo.city = action.payload.city;
      state.bookingInfo.days = action.payload.dayCount;
      state.bookingInfo.date = action.payload.date;
    }
  }
});

export const { getHotelSucess, getHotelfetch, getHotelfail, addToFavorite, setBookingInfo} = hotelSlice.actions;
export default hotelSlice.reducer;