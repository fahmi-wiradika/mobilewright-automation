import { test } from '@fixtures';
import { users } from '@data/users';

test.describe('auth: login', () => {
  test('rejects invalid credentials', async ({ loginScreen, tabBarScreen }) => {
    await tabBarScreen.open();
    await tabBarScreen.tapLoginMenu();
    await loginScreen.login(users.invalid.email, users.invalid.password);
  });
  test('login with valid credentials', async ({ loginScreen, homeScreen, tabBarScreen }) => {
    await tabBarScreen.open();
    await tabBarScreen.tapLoginMenu();
    await loginScreen.login(users.standard.email, users.standard.password);
  });
});