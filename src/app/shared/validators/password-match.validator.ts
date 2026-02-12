import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function matchPasswordValidator(password: string,confirmPassword: string): ValidatorFn {

  return (form: AbstractControl): ValidationErrors | null => {

    const passControl = form.get(password);
    const confirmControl = form.get(confirmPassword);

    if (!passControl || !confirmControl) {
      return null;
    }

    // agar confirmPassword pe pehle se koi aur error hai
    if (
      confirmControl.errors &&
      !confirmControl.errors['passwordMismatch']
    ) {
      return null;
    }

    if (passControl.value !== confirmControl.value) {
      confirmControl.setErrors({ passwordMismatch: true });
    } else {
      confirmControl.setErrors(null);
    }

    return null;
  };
}
