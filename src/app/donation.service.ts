// donation.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DonationService {
  private selectedAmount: number = 0;

  constructor() {}

  setselectedAmount(value: number) {
    this.selectedAmount = value;
  }

  getSelectedAmount(): number {
    return this.selectedAmount;
  }
}
