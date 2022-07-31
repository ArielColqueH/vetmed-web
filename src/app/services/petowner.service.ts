import { Injectable } from '@angular/core';
import {
  collection,
  Firestore,
  addDoc,
  collectionData,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
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
  getPetOwners(): Observable<PetOwner[]> {
    const petOwnerRef = collection(this.firestore, 'PetOwner');
    return collectionData(petOwnerRef, { idField: 'id' }) as Observable<
      PetOwner[]
    >;
  }
}
