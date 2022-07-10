import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-step-component',
  templateUrl: './third-step-component.component.html',
  styles: [],
})
export class ThirdStepComponentComponent implements OnInit {
  vaccineIcon = 'assets/images/vaccine-icon.svg';
  constructor() {}

  ngOnInit(): void {}
}
