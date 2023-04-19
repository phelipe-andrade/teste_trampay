import { combineReducers, configureStore } from '@reduxjs/toolkit';
import user from './user';
import theme from './theme';


const reducer = combineReducers({ user, theme });
const store = configureStore({ reducer });

export default store;