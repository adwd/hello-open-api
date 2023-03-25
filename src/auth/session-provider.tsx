'use client';

import { SessionProvider, SessionProviderProps } from 'next-auth/react';

export function ClientSessionProvider(props: SessionProviderProps) {
  return <SessionProvider {...props} />;
}
