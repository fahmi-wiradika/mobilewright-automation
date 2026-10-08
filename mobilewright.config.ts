import { defineConfig } from 'mobilewright';
import { app } from './config/app';

export default defineConfig({
  platform: 'android',
  bundleId: app.packageName,
  ...(app.apkPath ? { installApps: app.apkPath } : {}),
  deviceName: process.env.DEVICE_NAME ? new RegExp(process.env.DEVICE_NAME) : undefined,

  testDir: './tests',
  outputDir: './artifacts/test-results',
  timeout: 60_000,
  retries: 1,
  workers: 1,
  forbidOnly: false,
  reporter: 'html', // 'list' 
  viewTree: 'on-failure',

  use: {
    actionTimeout: 5_000,
    appLaunchTimeout: 20_000,
    installTimeout: 120_000,
    animations: 'off',
  },
  expect: { timeout: 5_000 },
});