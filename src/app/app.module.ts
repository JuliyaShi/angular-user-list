import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { UsersModule } from './users/users.module';
import { FormsModule } from '@angular/forms';
import { DatesService } from './dates.service';
import { CustomersModule } from './customers/customers.module';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    UsersModule,
    CustomersModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    RouterOutlet,
  ],
  providers: [DatesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
