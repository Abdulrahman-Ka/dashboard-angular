import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousigLocationComponent} from '../housig-location/housig-location.component'
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousigLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)" >Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location 
        *ngFor="let housingLocation of filteredLocationList"
        [housingLocation] = "housingLocation"
       ></app-housing-location>
</section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  housingLocationList: HousingLocation[] =[];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];


  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.housingLocationList = this.housingLocationList;
    this.filteredLocationList = this.housingLocationList;
  }

  filterResults(text: string){
    console.log(text);
    if (!text){
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }
}
