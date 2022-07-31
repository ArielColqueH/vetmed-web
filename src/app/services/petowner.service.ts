import { Injectable } from '@angular/core';
import { collection, Firestore, addDoc } from '@angular/fire/firestore';
import PetOwner from '../interfaces/PetOwner.interface';

@Injectable({
  providedIn: 'root',
})
export class PetownerService {
  constructor(private firestore: Firestore) {}

  addPetOwner(petOwner: PetOwner) {
    const petOwnerRef = collection(this.firestore, 'PetOwner');
    return addDoc(petOwnerRef, petOwner);
  }
}
