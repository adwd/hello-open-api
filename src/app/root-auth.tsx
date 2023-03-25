'use client';

import { signIn, useSession } from 'next-auth/react';

export const RootAuth = () => {
  const session = useSession();
  console.log(session);

  if (session.status === 'loading') return null;

  if (session.status === 'unauthenticated') {
    return <button onClick={() => signIn()}>Sign In</button>;
  }

  return <p>authenticated</p>;
};
