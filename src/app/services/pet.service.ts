import { Injectable } from '@angular/core';
import {
  collection,
  Firestore,
  collectionData,
  doc,
  query,
  where,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import Pet from '../interfaces/Pet.interface';
import PetOwner from '../interfaces/PetOwner.interface';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  constructor(private firestore: Firestore) {}

  getPets(): Observable<Pet[]> {
    const petRef = collection(this.firestore, 'Pet');
    return collectionData(petRef, { idField: 'id' }) as Observable<Pet[]>;
  }

  getPetsByPetOwnerId(petOwner: PetOwner) {
    const petRef = collection(this.firestore, 'Pet');
    const q = query(petRef, where('PetOwnerId', '==', petOwner.id));
    return collectionData(q, { idField: 'id' }) as Observable<Pet[]>;
  }
}
