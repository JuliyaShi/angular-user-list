import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UsersComponent } from './components/users/users.component';
import { UsersService } from './services/users.service';
import { UsersEffects } from './store/effects';
import { reducers } from './store/reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('users', reducers),
    EffectsModule.forFeature([UsersEffects]),
  ],
  providers: [UsersService],
  declarations: [UsersComponent],
  exports: [UsersComponent],
})
export class UsersModule {}
