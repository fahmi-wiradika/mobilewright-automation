import type { Device } from './base.screen';

export const openDeepLink = (device: Device, url: string) => device.openUrl(url);
export const launchApp = (device: Device, packageName: string) => device.launchApp(packageName);