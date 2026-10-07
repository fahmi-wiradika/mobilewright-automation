import { BaseScreen, type Screen } from '@core/base.screen';
import { TabBar } from '@components/tab-bar';
import { expect } from '@mobilewright/test';

export class HomeScreen extends BaseScreen {
  readonly tabs: TabBar;

  constructor(screen: Screen) {
    super(screen);
    this.tabs = new TabBar(screen);
  }

  async waitUntilLoaded() {
    await expect(this.screen.getByTestId('com.saucelabs.mydemoapp.android:id/mTvTitle')).toBeVisible();
  }
}