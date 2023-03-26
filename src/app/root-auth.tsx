'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export const RootAuth = () => {
  const session = useSession();
  console.log('RootAuth', session);

  if (session.status === 'loading') return null;

  if (session.status === 'unauthenticated') {
    return <button onClick={() => signIn()}>Sign In</button>;
  }

  return (
    <div>
      <Link href={'/home'}>Home</Link>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
};
