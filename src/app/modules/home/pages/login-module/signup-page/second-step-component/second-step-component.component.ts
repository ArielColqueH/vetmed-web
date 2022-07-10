import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-step-component',
  templateUrl: './second-step-component.component.html',
  styles: [],
})
export class SecondStepComponentComponent implements OnInit {
  imageSrc = 'assets/images/photo-icon.svg';
  constructor() {}

  ngOnInit(): void {}
}
