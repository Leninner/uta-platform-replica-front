import loaderReducer from './slices/loaderSlice'
import alertsReducer from './slices/alertSlice'
import counterReducer from './slices/counterSlice'
import accountReducer from './slices/accountSlice'
import uiReducer from './slices/uiSlice'
import modalReducer from './slices/modalSlice'
import coursesReducer from './slices/coursesSlice'
import asideReducer from './slices/asideSlice'

export const rootReducer = {
  loader: loaderReducer,
  alerts: alertsReducer,
  counter: counterReducer,
  modal: modalReducer,
  account: accountReducer,
  ui: uiReducer,
  courses: coursesReducer,
  aside: asideReducer
}
