import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {Formulario} from 'src/app/shared/services/formulario';
import { EmailAuthCredential, EmailAuthProvider } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class FormulariosService {

constructor(private firestore: Firestore) { }
addFormulario(formulario: Formulario) {
  const formularioRef = collection(this.firestore, 'formularios');
 
  return addDoc(formularioRef, formulario);
}

getFormulario(): Observable<Formulario[]> {
  const formularioRef = collection(this.firestore, 'formularios');
  return collectionData(formularioRef, { idField: 'id' }) as Observable<Formulario[]>;
}

deleteFormulario(formulario: Formulario) {
  const formularioDocRef = doc(this.firestore, `formularios/${formulario.id}`);
  return deleteDoc(formularioDocRef);
}

}
