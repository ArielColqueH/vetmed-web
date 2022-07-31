import { Component, OnInit } from '@angular/core';
import { PetownerService } from 'src/app/services/petowner.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private petOwnerService: PetownerService) {}

  ngOnInit(): void {}
  async addPetOwner() {
    var po = {
      PetOwnerId: 'x',
      Name: 'x',
      Lastname: 'x',
      Email: 'x',
    };
    console.log(po);
    const response = await this.petOwnerService.addPetOwner(po);
    console.log(response);
  }
}
