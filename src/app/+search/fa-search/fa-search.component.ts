import { Component, OnInit } from '@angular/core';
import { JSONP_PROVIDERS }  from '@angular/http';
import { FaListComponent } from '../../shared/fa-list/fa-list.component';
import { SearchService } from '../search.service';

@Component({
  moduleId: module.id,
  selector: 'app-fa-search',
  templateUrl: 'fa-search.component.html',
  styleUrls: ['fa-search.component.css'],
  directives: [FaListComponent],
  providers:[SearchService,JSONP_PROVIDERS]
})
export class FaSearchComponent implements OnInit {
  restaurants: any[];
  errorMessage: any;
  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.searchService.getRestaurants()
                      .subscribe(
                        restaurants => console.log(restaurants),
                        error => this.errorMessage = <any>error
                      );
  } //this.restaurants = restaurants

}
