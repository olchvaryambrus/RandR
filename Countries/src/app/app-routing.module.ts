import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryDetailsComponent } from './country-details/country-details.component';


const routes: Routes = [
  { path: 'countries/:alpha3Code/details', component: CountryDetailsComponent},
  { path: 'countries', component: CountryListComponent },
  { path: '', redirectTo: '/countries', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
