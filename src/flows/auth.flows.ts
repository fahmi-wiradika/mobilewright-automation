import type { LoginScreen } from '@screens/auth/login.screen';
import type { HomeScreen } from '@screens/home/home.screen';

export async function loginAs(
  loginScreen: LoginScreen,
  homeScreen: HomeScreen,
  creds: { email: string; password: string },
) {
  await loginScreen.waitUntilLoaded();
  await loginScreen.login(creds.email, creds.password);
  await homeScreen.waitUntilLoaded();
}