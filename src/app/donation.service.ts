// donation.service.ts
import { Injectable } from '@angular/core';
import { DonationComponent } from './donation/donation.component';

@Injectable({
  providedIn: 'root',
})
export class DonationService {
  private selectedAmount: number = 0;

  constructor(donationComponent :DonationComponent) {}

  getSelectedAmount() {
    return DonationComponent.selectedAmount;
  }

  setSelectedAmount(amount: number): void {
    this.selectedAmount = amount;
  }
}
