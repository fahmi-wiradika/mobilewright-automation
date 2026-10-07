import 'dotenv/config';

export const app = {
  packageName: process.env.APP_PACKAGE ?? 'com.example.myapp',
  apkPath: process.env.APK_PATH, // leave empty if the app is already installed
};