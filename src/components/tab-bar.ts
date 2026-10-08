import type { Screen } from '@core/base.screen';
import { expect, Locator } from 'mobilewright';

export class TabBar {

  readonly loginMenu: Locator;
  readonly tabBarMenu: Locator;
  readonly logoutMenu: Locator;
  readonly confirmLogout: Locator;

  constructor(private readonly screen: Screen) {
    this.screen = screen;
    this.tabBarMenu = screen.getByLabel('View menu')
    this.loginMenu = screen.getByRole('text', { name: 'Login Menu Item' });
    this.logoutMenu = screen.getByRole('text', { name: 'Logout Menu Item' });
    this.confirmLogout = screen.getByRole('button', { name: 'LOGOUT' });
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

  async tapLogoutMenu(){
    await this.logoutMenu.tap();
  }

  async tapConfirmLogout(){
    await this.confirmLogout.tap();
  }
}