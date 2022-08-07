import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-attentionlaststep6',
  templateUrl: './attentionlaststep6.component.html',
  styleUrls: ['./attentionlaststep6.component.scss'],
})
export class Attentionlaststep6Component implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}
  goto(link: any) {
    this.router.navigate(['home-page/' + link]);
  }
}
