import { BaseScreen } from '@core/base.screen';
import { expect } from '@mobilewright/test';

export class LoginScreen extends BaseScreen {
  private email = () => this.screen.getByTestId('com.saucelabs.mydemoapp.android:id/nameET');
  private password = () => this.screen.getByTestId('com.saucelabs.mydemoapp.android:id/passwordET');
  private submit = () => this.screen.getByTestId('com.saucelabs.mydemoapp.android:id/loginBtn');

  async waitUntilLoaded() {
    await expect(this.email()).toBeVisible();
  }

  async login(email: string, password: string) {
    await this.email().fill(email);
    await this.password().fill(password);
    await this.submit().tap();
  }

}