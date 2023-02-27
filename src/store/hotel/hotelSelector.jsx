export const sliderItems = () => (state) => state.hotelReducer.sliders;

export const allHotels = () => (state) => state.hotelReducer.items;

export const getHotelsFromFavotite = () => (state) =>  state.hotelReducer.favoriteItems;

export const isFavoriteHotel = (id) => (state) => {
 return state.hotelReducer.favoriteItems.find( _ => _.id === id);
}

export const getBookingInfo = () => (state) => state.hotelReducer.bookingInfo;
