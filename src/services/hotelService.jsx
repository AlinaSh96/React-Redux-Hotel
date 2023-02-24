import  { put, call, debounce, takeLatest} from 'redux-saga/effects'
import { getHotelSucess } from '../store/hotel/hotelSlice'

function* fetchUserWorker(action) {
  const city = action.payload
  const hotels = yield call(() => fetch(`http://engine.hotellook.com/api/v2/lookup.json?query=${city}&lang=ru&lookFor=hotel`));
  const formattedCats = yield hotels.json()

 yield put(getHotelSucess(formattedCats.results.hotels))

}

function* handleSearchDebounce(action) {
    const hotels = yield call(() => fetch(`http://engine.hotellook.com/api/v2/lookup.json?query=moscow&lang=ru&lookFor=hotel`));
    const formattedCats = yield hotels.json()
    yield put(getHotelSucess(formattedCats.results.hotels));
  }
  
function* fetchUserWatcher() {
  yield takeLatest('hotel/getHotelfetch', fetchUserWorker);

  // yield debounce(
  //   500,
  //   setFilterWithDebounce,
  //   handleSearchDebounce
  // );
  
}

export default fetchUserWatcher;