import { BaseScreen } from '@core/base.screen';
import { expect } from '@mobilewright/test';

export class LoginScreen extends BaseScreen {
  private email = () => this.screen.getByTestId('com.saucelabs.mydemoapp.android:id/nameET');
  private password = () => this.screen.getByTestId('com.saucelabs.mydemoapp.android:id/passwordET');
  private submit = () => this.screen.getByTestId('com.saucelabs.mydemoapp.android:id/loginBtn');
  private locked = () => this.screen.getByTestId('com.saucelabs.mydemoapp.android:id/passwordErrorTV');

  async waitUntilLoaded() {
    await expect(this.email()).toBeVisible();
  }

  async verifyLockedAccount(){
    await expect(this.locked()).toBeVisible();
  }

  async login(email: string, password: string) {
    await this.email().fill(email);
    await this.password().fill(password);
    await this.submit().tap();
  }

}