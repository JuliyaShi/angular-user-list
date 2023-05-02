import { createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/types/appState.interface';

export const selectUsers = (state: AppStateInterface) => state.users;

export const isLoadingSelector = createSelector(
  selectUsers,
  (state) => state?.isLoading
);

export const usersSelector = createSelector(
  selectUsers,
  (state) => state?.users
);

export const errorSelector = createSelector(
  selectUsers,
  (state) => state?.error
);
