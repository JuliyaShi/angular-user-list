import { Component, OnInit } from '@angular/core';
import { DatesService } from './dates.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private datesService: DatesService) {
    console.warn(
      this.datesService.getToday(),
      this.datesService.getTomorrow(),
      this.datesService.getYesterday()
    )
  }

  value='tesFFt'
  changeValue(event: Event): void {
   console.warn(event)
   const value = (event.target as HTMLInputElement).value
   this.value = value
  }

}
