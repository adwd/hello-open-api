import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { logger } from '@/lib/logger';
import Link from 'next/link';

export default async function RootAuth() {
  const session = await getServerSession(authOptions);
  logger.info(session);

  if (session == null) {
    redirect('/');
  }

  return (
    <div>
      <h1>Home</h1>
      <Link href="/">Root</Link>
    </div>
  );
}
