import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-attentiontakeweight1',
  templateUrl: './attentiontakeweight1.component.html',
  styleUrls: ['./attentiontakeweight1.component.scss'],
})
export class Attentiontakeweight1Component implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}
  gotoback(link: any) {
    this.router.navigate([link], { relativeTo: this.route });
  }
  goto(link: any) {
    this.router.navigate(['home-page/' + link]);
  }
}
