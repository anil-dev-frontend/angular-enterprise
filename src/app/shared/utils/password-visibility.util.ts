export class PasswordVisibility {
  isVisible: boolean = false;

  toggle(): void {
    this.isVisible = !this.isVisible;
  }

  get type(): string {
    return this.isVisible ? 'text' : 'password';
  }

  get icon(): string {
    return this.isVisible ? 'bi-eye-slash' : 'bi-eye';
  }
}
