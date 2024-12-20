import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  isModalOpen: boolean = false;

  constructor(
    private router: Router
  ) { }

  closeModal() {
    this.toggleSuccessModal();
    this.router.navigate(['/home/admin/cohorts']);
  }

  toggleSuccessModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  
}
