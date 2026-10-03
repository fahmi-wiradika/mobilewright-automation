import { test } from '@fixtures';
import { users } from '@data/users';

test.describe('auth: login', () => {
  test('rejects invalid credentials', async ({ loginScreen }) => {
    await loginScreen.waitUntilLoaded();
    await loginScreen.login(users.invalid.email, users.invalid.password);
    await loginScreen.expectInvalidCredentialsError();
  });
});