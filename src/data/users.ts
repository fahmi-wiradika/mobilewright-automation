import { env } from '@config/env';

export const users = {
  standard: { email: env.user.email, password: env.user.password },
  invalid: { email: 'alice@example.com', password: 'wrong-password' },
};