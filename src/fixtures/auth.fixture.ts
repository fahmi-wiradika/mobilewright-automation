import { test as base } from './screen.fixture';
import { loginAs } from '@flows/auth.flows';
import { users } from '@data/users';
import type { HomeScreen } from '@screens/home/home.screen';

type AuthFixtures = {
  /** A HomeScreen that is already logged in. */
  loggedInHome: HomeScreen;
};

export const test = base.extend<AuthFixtures>({
  loggedInHome: async ({ loginScreen, homeScreen }, use) => {
    await loginAs(loginScreen, homeScreen, users.standard);
    await use(homeScreen);
  },
});