import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Importez ces modules
import { DonationService } from '../donation.service';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css'],
})
export class DonationComponent {
  donationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private donationService: DonationService,
    private toast: NgToastService
  ) {
    // Créez le formulaire dans le constructeur
    this.donationForm = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        amount: ['', [Validators.required, Validators.min(1)]],
      },
      { updateOn: 'change' }
    );
  }
  tmp: number = 0;
  @ViewChild('customAmountInput', { static: false })
  customAmountInput!: ElementRef;

  onSubmit() {
    const inputValue = this.customAmountInput.nativeElement.value;

    // Mark the form fields as touched to trigger validation

    if (
      this.donationForm.get('email')?.invalid ||
      this.donationForm.get('lastname')?.invalid ||
      this.donationForm.get('firstname')?.invalid
    ) {
      return;
    } else {
      if (+inputValue < 0) {
        console.log(inputValue);
        this.toast.error({
          detail: 'ERROR',
          summary: 'Veuillez entrer un nombre positif.',
          duration: 5000,
          sticky: true,
        });
      } else if (+inputValue === 0) {
        console.log(inputValue);
        this.toast.warning({
          detail: 'WARN',
          summary: 'Veuillez entrer un nombre supérieur à zéro',
          duration: 5000,
          sticky: true,
        });
      } else {
        this.donationService.setselectedAmount(+inputValue);
        console.log(inputValue);
        this.toast.success({
          detail: 'SUCCESS',
          summary: `Formulaire soumis ! ${inputValue} MAD`,
          duration: 5000,
          sticky: true,
        });
      }
    }
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

  toggle_icon_transform_1() {
    let x = document.getElementById('toggle-icon-1')!;
    if (x.style.transform === 'rotate(-180deg)') {
      x.style.transform = 'rotate(0deg)';
    } else {
      x.style.transform = 'rotate(-180deg)';
    }
  }
  toggle_icon_transform_2() {
    let x = document.getElementById('toggle-icon-2')!;
    if (x.style.transform === 'rotate(-180deg)') {
      x.style.transform = 'rotate(0deg)';
    } else {
      x.style.transform = 'rotate(-180deg)';
    }
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
