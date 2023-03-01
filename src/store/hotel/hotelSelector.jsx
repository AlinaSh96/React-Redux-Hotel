export const sliderItems = () => (state) => state.hotelReducer.sliders;

export const allHotels = () => (state) => state.hotelReducer.items;

export const getHotelsFromFavotite = () => (state) =>  state.hotelReducer.favoriteItems;

export const isFavoriteHotel = (hotelId) => (state) => {
 return state.hotelReducer.favoriteItems.find( _ => _.hotelId === hotelId);
}

export const getBookingInfo = () => (state) => state.hotelReducer.bookingInfo;

export const hasErrors = () => (state) => state.hotelReducer.errors;