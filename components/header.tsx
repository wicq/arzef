'use client';
import Image from "next/image";
import {useTranslations} from 'next-intl';
import {Link, usePathname} from '@/i18n/routing';
import {Button} from '@/components/ui/button';

export default function Header() {
  const t = useTranslations();
  const pathname = usePathname();

  return (
<header className="border-b border-border/40">
<div className="container mx-auto px-4 sm:px-6 lg:px-8">
  <div className="flex h-16 items-center justify-between">
    <div className="flex items-center space-x-2">
      <Image
        src="/logo.png"
        alt="Arzef logo"
        width={32}
        height={32}
        className="h-8 w-8"
      />
      <span className="text-xl font-semibold">Arzef</span>
    </div>
    <nav className="hidden md:flex items-center space-x-8">
      <a href="#work" className="text-sm font-medium hover:text-foreground/80 transition-colors">
        {t('navigation.work')}
      </a>
      <a href="#contact" className="text-sm font-medium hover:text-foreground/80 transition-colors">
        {t('navigation.contact')}
      </a>
      <div className="flex items-center space-x-2">
        <Link href={pathname} locale="en">
          <Button variant="ghost" size="sm" className="text-xs">
            EN
          </Button>
        </Link>
        <Link href={pathname} locale="tr">
          <Button variant="ghost" size="sm" className="text-xs">
            TR
          </Button>
        </Link>
      </div>
    </nav>
    </div>
      </div>
    </header>
  );
}
