import { put, call, debounce, takeLatest } from 'redux-saga/effects';
import { getHotelSucess, getHotelfail } from '../store/hotel/hotelSlice';
import { format, addDays } from 'date-fns';

function* fetchUserWorker(action) {
    const { city, dayCount, date } = action.payload;
    const checkIn = format(new Date(JSON.parse(date)), 'yyyy-MM-dd');
    const checkOut = format(addDays(new Date(JSON.parse(date)), +dayCount), 'yyyy-MM-dd');

    try {
        const data = yield call(() =>
            fetch(
                ` https://engine.hotellook.com/api/v2/cache.json?location=${city}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=10&lang=ru`
            )
        );
        const hotels = yield data.json();
        yield hotels.forEach((hotel) => {
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
