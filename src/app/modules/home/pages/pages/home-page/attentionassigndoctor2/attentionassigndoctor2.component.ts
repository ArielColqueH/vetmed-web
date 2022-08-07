import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-attentionassigndoctor2',
  templateUrl: './attentionassigndoctor2.component.html',
  styleUrls: ['./attentionassigndoctor2.component.scss'],
})
export class Attentionassigndoctor2Component implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}
  gotoback(link: any) {
    this.router.navigate([link], { relativeTo: this.route });
  }
  goto(link: any) {
    this.router.navigate(['home-page/' + link]);
  }
}
