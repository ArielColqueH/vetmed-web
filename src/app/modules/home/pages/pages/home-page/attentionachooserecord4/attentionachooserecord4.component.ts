import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-attentionachooserecord4',
  templateUrl: './attentionachooserecord4.component.html',
  styleUrls: ['./attentionachooserecord4.component.scss'],
})
export class Attentionachooserecord4Component implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}
  vaccineIcon = 'assets/images/vaccine-icon.svg';
  desparasitationIcon = 'assets/images/desparasitation-icon.svg';
  surgeryIcon = 'assets/images/surgery-icon.svg';
  ngOnInit(): void {}
  goto(link: any) {
    this.router.navigate(['home-page/' + link]);
  }
}
