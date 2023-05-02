import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { UsersService } from '../services/users.service';
import * as UsersActions from './actions';

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private usersService: UsersService) {}
  getUsers$ = createEffect(():any =>
    this.actions$.pipe(
      ofType(UsersActions.getUsers),
      mergeMap(() => {
        return this.usersService.getUsers().pipe(
          tap((users) => console.warn(users)),
          map((users) => UsersActions.getUsersSuccess( { users } )),
          catchError((error) =>
            of(UsersActions.getUsersFailure({ error: error.message }))
          )
        );
      })
    )
  );

}
