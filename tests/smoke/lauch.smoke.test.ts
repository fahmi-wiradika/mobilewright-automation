import { test, expect } from '@fixtures';

test.describe('smoke: app launch', () => {

  // test.beforeEach()

  test.skip('login screen is shown on launch', async ({ loginScreen }) => {
    await loginScreen.waitUntilLoaded();
  });

  test.skip('valid user can log in', async ({ loggedInHome }) => {
    await loggedInHome.waitUntilLoaded();
  });

  test.skip('open apps', async ({ homeScreen }) => {
    await homeScreen.waitUntilLoaded();
  });

  test('open apps and navigate to login page', async ({ homeScreen, loginScreen, tabBarScreen}) => {
    // await homeScreen.waitUntilLoaded();
    await tabBarScreen.open();
    await tabBarScreen.tapLoginMenu();
    await loginScreen.waitUntilLoaded();
  });
});