import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Importez ces modules

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css'],
})
export class DonationComponent {
  donationForm: FormGroup; // Définissez votre formulaire ici

  constructor(private formBuilder: FormBuilder) {
    // Créez le formulaire dans le constructeur
    this.donationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      amount: ['', [Validators.required, Validators.min(1)]],
    });
  }

  onSubmit() {
    // Logique de soumission du formulaire ici
    alert('Formulaire soumis !');
  }

  isScreenSizeLarge = window.innerWidth > 992;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.isScreenSizeLarge = window.innerWidth > 992;
  }

  selectedAmount: number = 0;
  selectAmount(amount: number) {
    this.selectedAmount = amount;
  }

  chequeOpen: boolean = false;
  bankOpen: boolean = false;

  togglePaymentMethod(method: string) {
    if (method === 'cheque') {
      this.chequeOpen = !this.chequeOpen;
    } else if (method === 'bankTransfer') {
      this.bankOpen = !this.bankOpen;
    }
  }
  

}
