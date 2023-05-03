import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UsersComponent } from './users.component';
import { Store } from '@ngrx/store';
import { Observable, ReplaySubject } from 'rxjs';
import { UserInterface } from '../../types/user.interface';
import { error } from 'protractor';

describe('AppComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let store: Store<any>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        UsersComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    component.users$ = new Observable<UserInterface[]>;
    component.isLoading$  = new Observable<boolean>
    component.error$ = new Observable<string | null>
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(UsersComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should dispatch action to load users', () => {
    const users$ = [{ name:'test', id: 1, address: {city:'test1'} }];
    expect(store.dispatch).toHaveBeenCalledWith({
    type: '[Users] Get Users',
		});
  })
});
