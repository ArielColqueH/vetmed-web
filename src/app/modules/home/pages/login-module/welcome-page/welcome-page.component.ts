import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
})
export class WelcomePageComponent implements OnInit {
  imageSrc = 'assets/images/veterinary-1.svg';
  wavetopSrc = 'assets/images/wave-top.svg';
  wavebottomSrc = 'assets/images/wave-bottom.svg';
  constructor() {}

  ngOnInit(): void {}
}
