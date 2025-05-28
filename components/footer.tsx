import Image from "next/image";
import {useTranslations} from 'next-intl';

export default function Footer() {
  const t = useTranslations();
  
  return (

    <footer className="border-t border-border/40 mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 sm:mb-0">
              <Image
                src="/logo.png"
                alt="Arzef logo"
                width={50}
                height={50}
                className="h-10 w-10"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </footer>

  );
}