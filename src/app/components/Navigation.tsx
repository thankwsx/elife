'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    {
      name: '首页',
      href: '/',
    },
    {
      name: '日记',
      href: '/diary',
    },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
                赛博生活
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${pathname === item.href
                    ? 'text-gray-900 border-b-2 border-gray-500'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}