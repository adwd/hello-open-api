import { Inter } from 'next/font/google';
import { RootAuth } from './root-auth';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <h2 className={inter.className}>Test App</h2>
      <RootAuth />
    </main>
  );
}
