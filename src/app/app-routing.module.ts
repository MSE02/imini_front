import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DonationComponent } from './donation/donation.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PaypalComponent } from './paypal/paypal.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'paypal', component: PaypalComponent },
  { path: 'donation', component: DonationComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
