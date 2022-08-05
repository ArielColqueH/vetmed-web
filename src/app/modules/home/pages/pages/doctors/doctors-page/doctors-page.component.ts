import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-doctors-page',
  templateUrl: './doctors-page.component.html',
  styleUrls: ['./doctors-page.component.scss'],
})
export class DoctorsPageComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}
  editDoctor() {
    // this.router.navigate(['child'], { relativeTo: this.route });
    this.router.navigate(['edit-doctor']);
  }
  addDoctor() {
    // this.router.navigate(['child'], { relativeTo: this.route });
    this.router.navigate(['add-doctor']);
  }
}
