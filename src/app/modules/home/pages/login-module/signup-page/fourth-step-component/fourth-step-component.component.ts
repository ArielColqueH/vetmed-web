import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fourth-step-component',
  templateUrl: './fourth-step-component.component.html',
  styles: [],
})
export class FourthStepComponentComponent implements OnInit {
  imageDoctor = 'assets/images/signup-img.svg';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}
  goto(link: any) {
    this.router.navigate([link]);
  }
}
