import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  getNavItems(): Observable<any> {
    return this.firestore.collection('NavItems')
      .valueChanges();
  }
}
