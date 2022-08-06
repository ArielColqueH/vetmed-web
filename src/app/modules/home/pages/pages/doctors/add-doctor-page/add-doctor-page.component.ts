import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-doctor-page',
  templateUrl: './add-doctor-page.component.html',
  styleUrls: ['./add-doctor-page.component.scss'],
})
export class AddDoctorPageComponent implements OnInit {
  imageSrc = 'assets/images/photo-icon.svg';
  constructor() {}

  ngOnInit(): void {}
}
