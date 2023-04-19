import { combineReducers, configureStore } from '@reduxjs/toolkit';
import user from './user';
import theme from './theme';
import message from './message';


const reducer = combineReducers({ user, theme, message });
const store = configureStore({ reducer });

export default store;