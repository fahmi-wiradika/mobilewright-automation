import type { Screen } from '@core/base.screen';

export class TabBar {
  constructor(private readonly screen: Screen) {}

  async open(tabName: string) {
    await this.screen.getByRole('tab', { name: tabName }).tap();
  }
}