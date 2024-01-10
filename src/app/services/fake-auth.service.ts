import { Injectable } from '@angular/core';
import { user } from '../models/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeAuthService {

  public currentUserSubject : BehaviorSubject<user>

  constructor() {
    this.currentUserSubject = new BehaviorSubject<user>(JSON.parse(sessionStorage.getItem('currentUser')))
  }

  SetSession(user : user){
    sessionStorage.setItem('currentUser',JSON.stringify(user))
    this.currentUserSubject.next(user)
  }

  ClearSession(){
    sessionStorage.clear()
    this.currentUserSubject.next(null)
  }

  getSession(){
    return this.currentUserSubject.value
  }

  IsConnected(){
    return (this.currentUserSubject != null)
  }
}
