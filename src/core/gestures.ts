import type { Screen } from './base.screen';

type Locator = ReturnType<Screen['getByText']>;

/** Swipes up until the locator exists on screen, or gives up after maxSwipes. */
export async function scrollUntilVisible(screen: Screen, target: Locator, maxSwipes = 8) {
  for (let i = 0; i < maxSwipes; i++) {
    if ((await target.count()) > 0) return;
    await screen.swipe('up');
  }
  throw new Error(`Element not found after ${maxSwipes} swipes`);
}

export const swipeUp = (screen: Screen) => screen.swipe('up');
export const swipeDown = (screen: Screen) => screen.swipe('down');
export const goBack = (screen: Screen) => screen.pressButton('BACK');