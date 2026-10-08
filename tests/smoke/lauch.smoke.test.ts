import { test } from '@fixtures';

test.describe('smoke: app launch', () => {
  test('open apps', async ({ homeScreen }) => {
    await homeScreen.waitUntilLoaded();
  });

  test('open apps and navigate to login page', async ({ loginScreen, tabBarScreen}) => {
    await tabBarScreen.open();
    await tabBarScreen.tapLoginMenu();
    await loginScreen.waitUntilLoaded();
  });
});