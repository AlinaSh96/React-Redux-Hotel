import { put, call, debounce, takeLatest } from 'redux-saga/effects';
import { getHotelSucess, getHotelfail } from '../store/hotel/hotelSlice';

function* fetchUserWorker(action) {
    const { city, dayCount, date } = action.payload;
    const checkOut = new Date(JSON.parse(date));
    checkOut.setDate(checkOut.getDate() + +dayCount)

    try {
        const date = yield call(() =>
            fetch(
                `https://engine.hotellook.com/api/v2/lookup.json?query=${city}&lang=ru&lookFor=both`
               // `https://cache.json?location=${city}&currency=rub&checkIn=${date}&&checkOut=${checkOut}&limit=10`
            )
        );
        const formattedDate = yield date.json();
        const hotels = yield formattedDate.results.hotels;
        yield hotels.forEach((hotel) => {
            hotel.raiting = Math.floor(Math.random() * 6);
            hotel.price = Math.floor(Math.random() * 20000) + 30000;
            hotel.isFavorite = false;
        });
        yield put(getHotelSucess(hotels));
    } catch (error) {
        yield put(getHotelfail(error));
    }
}

function* fetchUserWatcher() {
    yield takeLatest('hotel/getHotelfetch', fetchUserWorker);
}

export default fetchUserWatcher;
