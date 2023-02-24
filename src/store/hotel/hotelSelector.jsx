export const sliderItems = () => (state) => {
    return state.hotelReducer.sliders;
}

export const allHotels = () => (state) => {
    return state.hotelReducer.items;
}

export const getHotelsFromFavotite = () => (state) => {
    return state.hotelReducer.favoriteItems;
}
