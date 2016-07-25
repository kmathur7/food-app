import { Component, OnInit } from '@angular/core';
import { FaHeaderComponent } from '../../shared/fa-header/fa-header.component';
import { SearchService } from '../../+search/search.service';
import { LocationService } from '../../shared/location.service';
import { FaRestaurantComponent } from '../../shared/fa-restaurant/fa-restaurant.component';

@Component({
  moduleId: module.id,
  selector: 'app-fa-spin',
  templateUrl: 'fa-spin.component.html',
  styleUrls: ['fa-spin.component.css'],
  directives: [FaHeaderComponent,FaRestaurantComponent],
  providers: [SearchService, LocationService]
})
export class FaSpinComponent implements OnInit {
  url: string;
  errorMessage: any;
  showSpinner: boolean = true;
  public restaurants: any[];
  showRestaurant: boolean = false;
  restaurant: any= {
    restaurant: {
      name:'',
      location: {
        locality:''
      },
      cuisines:'',
      user_rating:{
        aggregate_rating:0
      }
    }
  };
  radius = 1000;
  constructor(private searchService: SearchService, private locationService: LocationService) { }

  spin() {
    console.log("spin");
    this.showRestaurant = true;
    this.restaurant = this.restaurants[this.random(0,this.restaurants.length)];
    console.log(this.restaurant);
  }

  random(min,max){
    return parseInt(Math.random()* (max-min) +min);
  }

  ngOnInit() {
    this.showSpinner = true;
    this.showRestaurant = false;
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
