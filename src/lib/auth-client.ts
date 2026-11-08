import { jwtClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  plugins: [jwtClient()],
  // No absolute baseURL: relative "/api/auth" keeps every request same-origin,
  // so the session cookie is always sent (works on any host/port).
});

export const { signIn, signUp, signOut, useSession } = authClient;
