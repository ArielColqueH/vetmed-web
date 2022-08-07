import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-attentionagiveservice3',
  templateUrl: './attentionagiveservice3.component.html',
  styleUrls: ['./attentionagiveservice3.component.scss'],
})
export class Attentionagiveservice3Component implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}
  imageSrc = 'assets/images/gif-pawn.gif';
  ngOnInit(): void {}
  goto(link: any) {
    this.router.navigate(['home-page/' + link]);
  }
}
