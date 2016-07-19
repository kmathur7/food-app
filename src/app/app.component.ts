import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { FaHomeComponent } from './+home/fa-home/fa-home.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives:[ROUTER_DIRECTIVES]
})
export class AppComponent {
  title = 'app works!';
}
