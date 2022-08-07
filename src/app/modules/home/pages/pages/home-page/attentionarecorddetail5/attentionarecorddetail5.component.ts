import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-attentionarecorddetail5',
  templateUrl: './attentionarecorddetail5.component.html',
  styleUrls: ['./attentionarecorddetail5.component.scss'],
})
export class Attentionarecorddetail5Component implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}
  goto(link: any) {
    this.router.navigate(['home-page/' + link]);
  }
}
