import { BaseScreen } from '@core/base.screen';
import { expect } from '@mobilewright/test';

export class LoginScreen extends BaseScreen {
  private email = () => this.screen.getByLabel('Email');
  private password = () => this.screen.getByLabel('Password');
  private submit = () => this.screen.getByRole('button', { name: 'Sign In' });
  private error = () => this.screen.getByText('Invalid credentials');

  async waitUntilLoaded() {
    await expect(this.email()).toBeVisible();
  }

  async login(email: string, password: string) {
    await this.email().fill(email);
    await this.password().fill(password);
    await this.submit().tap();
  }

  async expectInvalidCredentialsError() {
    await expect(this.error()).toBeVisible();
  }
}