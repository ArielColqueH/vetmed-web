import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcome-component',
  templateUrl: './welcome-component.component.html',
  styles: [],
})
export class WelcomeComponentComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}
  goto(link: any) {
    this.router.navigate([link], { relativeTo: this.route });
  }
}
