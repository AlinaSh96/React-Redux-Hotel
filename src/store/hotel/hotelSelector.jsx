export const sliderItems = () => (state) => {
    return state.hotelReducer.sliders;
}

export const allHotels = () => (state) => {
    return state.hotelReducer.items;
}

export const getHotelsFromFavotite = () => (state) => {
    return state.hotelReducer.favoriteItems;
}

export const isFavoriteHotel = (id) => (state) => {
    return state.hotelReducer.favoriteItems.find( _ => _.id === id);
}

export const getBookingInfo = () => (state) => {
    return state.hotelReducer.bookingInfo;
}