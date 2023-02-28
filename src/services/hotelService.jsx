import { put, call, debounce, takeLatest } from 'redux-saga/effects';
import { getHotelSucess, getHotelfail } from '../store/hotel/hotelSlice';

function* fetchUserWorker(action) {
    const { city, dayCount, date } = action.payload;

    const checkIn = new Date(JSON.parse(date)).toLocaleDateString('en-ca');
    let checkOut = new Date(checkIn);
    checkOut.setDate(checkOut.getDate() + +dayCount);
    checkOut = checkOut.toLocaleDateString('en-ca');
   console.log(action.payload) //{ city, dayCount, date }
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
