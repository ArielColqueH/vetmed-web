import { Component, OnInit } from '@angular/core';
import Pet from 'src/app/interfaces/Pet.interface';
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
  petList: Pet[] = [];
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
          .subscribe((pet) => {
            this.petList = pet;
            console.log('pet list:' + pet.length);
          });
        console.log('OwnerName' + this.petOwners[i].Name);
        console.log('OwnerLastName' + this.petOwners[i].Lastname);
        for (var j = 0; j < this.petList.length; j++) {
          console.log('PetName' + this.petList[j].PetName);
          console.log('PetLastName' + this.petList[j].PetLastname);
        }
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
