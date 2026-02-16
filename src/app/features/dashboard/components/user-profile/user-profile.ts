import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalAction, ModalConfig } from '@core/interceptors/modal.model';
import { SHARED_IMPORTS } from '@shared/common/shared.imports';
import { ReusableModal } from '@shared/components/reusable-modal/reusable-modal';

@Component({
  selector: 'app-user-profile',
  imports: [SHARED_IMPORTS,ReusableModal],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.scss',
})
export class UserProfile {
user: any = {};
  initials: string = '';
  showModal = false;
  modalConfig!: ModalConfig;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const userData = localStorage.getItem('user');
    console.log('User Data from localStorage:', userData);

    if (userData) {
      this.user = JSON.parse(userData);

      const fullName = this.user.fullName || '';
      const email = this.user.emailId || '';

      this.initials = this.getInitials(email);
    }
  }

  getInitials(email: string): string {
  if (!email) return 'U';

  // @ se pehle wala part nikal lo
  const username = email.split('@')[0];

  // username ka first letter UPPERCASE me
  return username.charAt(0).toUpperCase();
}

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  openLogoutModal() {
  this.modalConfig = {
    title: 'Logout',
    message: 'Are you sure you want to logout?',
    buttons: [
      {
        label: 'Cancel',
        action: ModalAction.CANCEL,
        cssClass: 'btn-secondary'
      },
      {
        label: 'Logout',
        action: ModalAction.CONFIRM,
        cssClass: 'btn-danger'
      }
    ]
  };

  this.showModal = true;
}
onModalAction(action: ModalAction) {

  if (action === ModalAction.CONFIRM) {
    this.logout(); //  Existing method
  }

  this.showModal = false;
}
  goToChangePassword() {
    this.router.navigate(['/dashboard/change-password']);
  }
}