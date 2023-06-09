import { createReducer, on } from '@ngrx/store';
import { UsersStateInterface } from '../types/usersState.interface';
import * as UsersActions from './actions';

export const initialState: UsersStateInterface = {
  isLoading: false,
  users: [],
  error: null,
};

export const reducers = createReducer(
  initialState,
  on(UsersActions.getUsers, (state) => ({ ...state, isLoading: true })),
  on(UsersActions.getUsersSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    users: action.users,
  })),
  on(UsersActions.getUsersFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  }))
);
