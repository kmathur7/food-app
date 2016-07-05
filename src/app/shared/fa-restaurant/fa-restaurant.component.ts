import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-fa-restaurant',
  templateUrl: 'fa-restaurant.component.html',
  styleUrls: ['fa-restaurant.component.css']
})
export class FaRestaurantComponent implements OnInit {
  @Input() restaurantData = {
    id: "",
    name: "",
    url: "",
    location: {
      address: "",
      locality: "",
      city: "",
      latitude: "",
      longitude: "",
      zipcode: "",
      country_id: ""
    },
    average_cost_for_two: "",
    price_range: "",
    currency: "",
    thumb: "",
    featured_image: "",
    photos_url: "",
    menu_url: "",
    events_url: "",
    user_rating: {
      aggregate_rating: "",
      rating_text: "",
      rating_color: "",
      votes: ""
    },
    has_online_delivery: "",
    is_delivering_now: "",
    deeplink: "",
    cuisines: "",
    all_reviews_count: "",
    photo_count: "",
    phone_numbers: ""
  }
  constructor() { }

  ngOnInit() {
  }

}
