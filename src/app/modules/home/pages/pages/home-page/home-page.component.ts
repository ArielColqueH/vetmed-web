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
    this.petOwnerService.getPetOwners().subscribe((petOwner) => {
      console.log(petOwner.length);
      this.petOwners = petOwner;
      for (var i = 0; i < this.petOwners.length; i++) {
        console.log('ownerName: ' + this.petOwners[i].Name);
        console.log('ownerLastname: ' + this.petOwners[i].Lastname);
        this.petService
          .getPetsByPetOwnerId(this.petOwners[i])
          .subscribe((pet) => {
            this.petList = pet;
            console.log('petlist: ' + this.petList.length);
            for (var j = 0; j < this.petList.length; j++) {
              console.log('PetName: ' + this.petList[j].PetName);
              console.log('PetLastName: ' + this.petList[j].PetLastname);
            }
          });
      }
    });

    // console.log(this.petOwners.length);
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

  async getAllPets() {
    await this.petOwnerService.getPetOwners().subscribe((petOwner) => {
      this.petOwners = petOwner;
      // console.log(petOwner.length);
      // for (var i = 0; i < petOwner.length; i++) {
      //   this.petOwners.push(petOwner[i]);
      // }
    });
  }
}
