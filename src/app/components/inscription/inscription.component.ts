import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from 'src/app/models/user.model';
import { FakeAuthService } from 'src/app/services/fake-auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  public inscriptionForm : FormGroup
  public newUser : user

  constructor(
    private _formBuilder : FormBuilder,
    private _router : Router,
    private _fakeAuth : FakeAuthService
  ) { }

  ngOnInit(): void {
    this.inscriptionForm = this._formBuilder.group({
      email : ['Test@gmail.com',[Validators.email, Validators.required]],
      nom : ['Doe', Validators.required],
      prenom : ['Jhon', Validators.required],
    })
  }

  inscription(){
    if (this.inscriptionForm.valid) {
      this.newUser = new user

      this.newUser.email = this.inscriptionForm.value['email']
      this.newUser.nom = this.inscriptionForm.value['nom']
      this.newUser.prenom = this.inscriptionForm.value['prenom']

      this._fakeAuth.SetSession(this.newUser)

      console.log("Redirection en cours...")
      this._router.navigate(['home'])
    }
  }
}
