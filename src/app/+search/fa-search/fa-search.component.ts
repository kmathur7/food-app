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
  providers: [SearchService,LocationService]
})
export class FaSearchComponent implements OnInit {
  restaurants: any[];
  errorMessage: any;
  showSpinner: boolean;
  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.showSpinner = true;
    this.searchService.getRestaurants()
      .subscribe(response => {
        this.showSpinner = false;
        this.restaurants = response.restaurants;
        console.log(response.restaurants)
      },
      error => this.errorMessage = <any>error
      );
  }

}
