import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-second-step-component',
  templateUrl: './second-step-component.component.html',
  styles: [],
})
export class SecondStepComponentComponent implements OnInit {
  imageSrc = 'assets/images/photo-icon.svg';
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  goto(link: any) {
    this.router.navigate([link]);
  }
}
