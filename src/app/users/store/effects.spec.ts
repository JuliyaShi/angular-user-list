import { Observable, ReplaySubject, of } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';
import { UsersEffects } from './effects';
import { UsersService } from '../services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { reducers } from './reducers';
import { UserInterface } from '../types/user.interface';
import { getUsersSuccess } from './actions';


describe('UsersEffects', () => {
  let effects: UsersEffects;
  let actions: ReplaySubject<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, StoreModule.forRoot(reducers)],
      providers: [
        UsersEffects,
        UsersService,
        provideMockActions(() => actions),
      ]
    });

    effects = TestBed.inject(UsersEffects);
    actions = new ReplaySubject(1);
  });

  it('should fetch users', () => {
    spyOn(TestBed.inject(UsersService), 'getUsers').and.returnValue(new Observable<UserInterface[]>);
    actions.next('[Users] Get Users');
    effects.getUsers$.subscribe((users: any) => {
      expect(users.type).toEqual(getUsersSuccess);
    });
  });
})
