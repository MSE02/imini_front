import { Component } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';
import { DonationComponent } from '../donation/donation.component';
import { DonationService } from '../donation.service';
@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css'],
})
export class PaypalComponent {
  constructor(private donationService: DonationService) {}
  ngOnInit(): void {
    const selectedAmount = this.donationService.getSelectedAmount();

    render({
      id: '#PayPalButtons',
      currency: 'MAD',
      value: selectedAmount.toFixed(2), // Use the selected amount here
      onApprove: (details) => {
        alert(`Transaction approved for amount: ${selectedAmount}`);
      },
    });
  }
}
