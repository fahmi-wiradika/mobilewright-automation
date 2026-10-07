import { TabBar } from '@components/tab-bar';
import { test as base } from '@mobilewright/test';
import { LoginScreen } from '@screens/auth/login.screen';
import { HomeScreen } from '@screens/home/home.screen';

type ScreenFixtures = {
  loginScreen: LoginScreen;
  homeScreen: HomeScreen;
  tabBarScreen : TabBar;
};

export const test = base.extend<ScreenFixtures>({
  loginScreen: async ({ screen }, use) => use(new LoginScreen(screen)),
  homeScreen: async ({ screen }, use) => use(new HomeScreen(screen)),
  tabBarScreen: async ({ screen }, use) => use(new TabBar(screen)),
});