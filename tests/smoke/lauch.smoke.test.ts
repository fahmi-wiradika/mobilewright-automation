import { test, expect } from '@fixtures';

test.describe('smoke: app launch', () => {
  test('login screen is shown on launch', async ({ loginScreen }) => {
    await loginScreen.waitUntilLoaded();
  });

  test('valid user can log in', async ({ loggedInHome }) => {
    await loggedInHome.waitUntilLoaded();
  });
});