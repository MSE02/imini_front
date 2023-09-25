import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DonationComponent } from './donation/donation.component';
import { BodyComponent } from './body/body.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PaypalComponent } from './paypal/paypal.component';
import { DonationService } from './donation.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgToastComponent, NgToastModule } from 'ng-angular-popup';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AboutUsComponent,
    DonationComponent,
    BodyComponent,
    NotFoundComponent,
    PaypalComponent,
  ],
  imports: [
    NgToastModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [DonationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
