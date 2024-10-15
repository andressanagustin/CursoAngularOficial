import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HosingLocationComponent } from '../hosing-location/hosing-location.component';
import { HousingLocation } from '../housinglocation';
import {HousingService} from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HosingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-hosing-location 
        *ngFor="let housingLocation of housingLocationList"
        [housingLocation]="housingLocation"
      ></app-hosing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
  
  housingLocationList: HousingLocation[] = [];
}
