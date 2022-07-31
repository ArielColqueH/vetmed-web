import { Component, OnInit } from '@angular/core';
import PetOwner from 'src/app/interfaces/PetOwner.interface';
import { PetService } from 'src/app/services/pet.service';
import { PetownerService } from 'src/app/services/petowner.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  petOwners: PetOwner[] = [];
  constructor(
    private petOwnerService: PetownerService,
    private petService: PetService
  ) {}

  ngOnInit(): void {
    this.petOwnerService.getPetOwners().subscribe((petOwners) => {
      this.petOwners = petOwners;
      console.log(this.petOwners.length);
      for (var i = 0; i < this.petOwners.length; i++) {
        this.petService
          .getPetsByPetOwnerId(this.petOwners[i])
          .subscribe((petOwners) => {
            console.log(petOwners);
          });
      }
    });

    // console.log(this.petOwners.length);
    // for (var i = 0; i < this.petOwners.length; i++) {
    //   console.log('log:' + i);
    // }
  }
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

  async deletePetOwner(petOwner: PetOwner) {
    const response = await this.petOwnerService.deletePetOwner(petOwner);
    console.log(response);
  }
}
