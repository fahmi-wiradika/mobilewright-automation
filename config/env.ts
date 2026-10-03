import 'dotenv';

const required = (key: string): string => {
  const value = process.env[key];
  if (!value) throw new Error(`Missing env var: ${key}`);
  return value;
};

export const env = {
  testEnv: process.env.TEST_ENV ?? 'staging',
  deviceName: process.env.DEVICE_NAME || undefined,
  user: {
    email: required('TEST_USER_EMAIL'),
    password: required('TEST_USER_PASSWORD'),
  },
};