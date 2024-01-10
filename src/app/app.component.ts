import { Component } from '@angular/core';
import { FakeAuthService } from './services/fake-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-form';

  constructor(
    private _fakeAuth : FakeAuthService,
    private _router : Router
  ){}

  logout(){
    this._fakeAuth.ClearSession()
    this._router.navigate(['home'])
  }
}
