import type { Screen, Device } from '@mobilewright/core';

export type { Screen, Device };

export abstract class BaseScreen {
  constructor(protected readonly screen: Screen) {}

  /** Each screen defines what "loaded" means. */
  abstract waitUntilLoaded(): Promise<void>;
}