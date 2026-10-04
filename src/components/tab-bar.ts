import type { Screen } from '@core/base.screen';
import { expect, Locator } from 'mobilewright';

export class TabBar {

  readonly loginMenu: Locator;
  readonly tabBarMenu: Locator;

  constructor(private readonly screen: Screen) {
    this.screen = screen;
    this.tabBarMenu = screen.getByLabel('View menu')
    this.loginMenu = screen.getByRole('text', { name: 'Login Menu Item' });
  }

  async verifyTabBar(){
    await expect(this.tabBarMenu).toBeVisible();
  }

  async open() {
    await this.tabBarMenu.tap();
  }

  async tapLoginMenu(){
    await this.loginMenu.tap();
  }
}