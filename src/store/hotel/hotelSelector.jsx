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

//export const selectCartItemById = (id: number) => (state: RootState) =>
//state.basketReducer.items.find((obj) => obj.id === id);