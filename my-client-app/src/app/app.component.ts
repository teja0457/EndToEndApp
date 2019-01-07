import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  actors = [];
  constructor(private appService: AppServiceService) {
  }

  ngOnInit() {
    console.log('app component');
    this.appService.getActors().subscribe(result => {
      console.log('result -->', result);
      this.actors = result;
    });
  }
}
