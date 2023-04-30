import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../redux/states/user'

export default configureStore({
  reducer: {
    user: userReducer,
  },
})