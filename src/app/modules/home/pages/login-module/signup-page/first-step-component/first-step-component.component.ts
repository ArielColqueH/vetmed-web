import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-first-step-component',
  templateUrl: './first-step-component.component.html',
  styles: [],
})
export class FirstStepComponentComponent implements OnInit {
  title = 'google-maps';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyBhPF9FSrEC3bncF7cSQ2RLEpCJnnY2yLg',
    });

    loader.load().then(() => {
      new google.maps.Map(document.getElementById('map')!, {
        center: { lat: 51.233334, lng: 6.78333 },
        zoom: 6,
      });
    });
  }

  goto(link: any) {
    this.router.navigate([link]);
  }
}
