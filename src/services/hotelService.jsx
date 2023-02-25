import { put, call, debounce, takeLatest } from 'redux-saga/effects'
import { getHotelSucess } from '../store/hotel/hotelSlice'

function* fetchUserWorker(action) {
  const city = action.payload
  const date = yield call(() => fetch(`http://engine.hotellook.com/api/v2/lookup.json?query=${city}&lang=ru&lookFor=both`));
  const formattedDate = yield date.json();
  const hotels = yield formattedDate.results.hotels;
  yield hotels.forEach(hotel => {
    hotel.raiting = Math.floor(Math.random() * 6);
    hotel.price = Math.floor(Math.random() * 20000) + 30000;
    hotel.isFavorite = false;
  })

  yield put(getHotelSucess(hotels));

}

function* fetchUserWatcher() {
  yield takeLatest('hotel/getHotelfetch', fetchUserWorker);
}

export default fetchUserWatcher;