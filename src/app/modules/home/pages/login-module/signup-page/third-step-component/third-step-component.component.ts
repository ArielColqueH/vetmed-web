import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-third-step-component',
  templateUrl: './third-step-component.component.html',
  styles: [],
})
export class ThirdStepComponentComponent implements OnInit {
  vaccineIcon = 'assets/images/vaccine-icon.svg';
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  goto(link: any) {
    this.router.navigate([link]);
  }
}
