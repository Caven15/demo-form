import { Component, OnInit } from '@angular/core';
import { FakeAuthService } from 'src/app/services/fake-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userConnected = this._fakeAuth.getSession()

  public message = "non enregistré..."

  constructor(
    private _fakeAuth : FakeAuthService
  ) { }

  ngOnInit(): void {
    this._fakeAuth.currentUserSubject.subscribe({
      next : (data) => {
        if (data != null) {
          this.message = `Bonjour ${data.nom}`
        }
        else{
          this.message = "non enregistré..."
        }
      }
    })
  }
}