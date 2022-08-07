import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-attentionachooserecord4',
  templateUrl: './attentionachooserecord4.component.html',
  styleUrls: ['./attentionachooserecord4.component.scss'],
})
export class Attentionachooserecord4Component implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}
  goto(link: any) {
    this.router.navigate(['home-page/' + link]);
  }
}
