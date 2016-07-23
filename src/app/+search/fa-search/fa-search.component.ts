import { Component, OnInit } from '@angular/core';
import { FaListComponent } from '../../shared/fa-list/fa-list.component';
import { SearchService } from '../search.service';
import { LocationService } from '../../shared/location.service';
import { FaHeaderComponent } from '../../shared/fa-header/fa-header.component';

@Component({
  moduleId: module.id,
  selector: 'app-fa-search',
  templateUrl: 'fa-search.component.html',
  styleUrls: ['fa-search.component.css'],
  directives: [FaListComponent, FaHeaderComponent],
  providers: [SearchService, LocationService]
})
export class FaSearchComponent implements OnInit {

  url: string;
  private radius = 1000;
  restaurants: any[];
  errorMessage: any;
  showSpinner: boolean;
  constructor(private searchService: SearchService, private locationService: LocationService) { }

  ngOnInit() {
    this.showSpinner = true;
    this.locationService.getlocation()
      .subscribe((pos: Position) => {
        this.url = 'https://food-express-api.herokuapp.com/search?lat=' + pos.coords.latitude + '&lon=' + pos.coords.longitude + '&radius=' + this.radius;
        this.searchService.getRestaurants(this.url)
          .subscribe(response => {
            this.showSpinner = false;
            this.restaurants = response.restaurants;
          },
          error => this.errorMessage = <any>error
          );
      });

  }

}
