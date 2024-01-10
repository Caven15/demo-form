import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InscriptionComponent } from './components/inscription/inscription.component';

const routes: Routes = [
  {path: 'home', component : HomeComponent},
  {path: 'inscription', component : InscriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
