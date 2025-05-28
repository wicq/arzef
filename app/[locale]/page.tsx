import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import CalBooking from "@/components/cal-booking";
import Link from "next/link";
import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      {/* Header */}

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6">
            {t('hero.badge')}
          </Badge>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            {t('hero.description')}
          </p>
          <Link href="#contact">
            <Button>
              {t('hero.contactButton')}
            </Button>
          </Link>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="work" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">{t('showcase.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 rounded-lg mb-4 flex items-center justify-center transition-transform group-hover:scale-[1.02] border border-border/20">
                <div className="w-16 h-16 bg-blue-500 rounded-lg opacity-20"></div>
              </div>
              <h3 className="text-lg font-semibold mb-1">{t('showcase.documentIntelligence.title')}</h3>
              <p className="text-sm text-muted-foreground">{t('showcase.documentIntelligence.description')}</p>
            </div>

            <div className="group cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 rounded-lg mb-4 flex items-center justify-center transition-transform group-hover:scale-[1.02] border border-border/20">
                <div className="w-16 h-16 bg-purple-500 rounded-lg opacity-20"></div>
              </div>
              <h3 className="text-lg font-semibold mb-1">{t('showcase.imageProcessing.title')}</h3>
              <p className="text-sm text-muted-foreground">{t('showcase.imageProcessing.description')}</p>
            </div>

            <div className="group cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 rounded-lg mb-4 flex items-center justify-center transition-transform group-hover:scale-[1.02] border border-border/20">
                <div className="w-16 h-16 bg-green-500 rounded-lg opacity-20"></div>
              </div>
              <h3 className="text-lg font-semibold mb-1">{t('showcase.professionalPlatforms.title')}</h3>
              <p className="text-sm text-muted-foreground">{t('showcase.professionalPlatforms.description')}</p>
            </div>

            <div className="group cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 rounded-lg mb-4 flex items-center justify-center transition-transform group-hover:scale-[1.02] border border-border/20">
                <div className="w-16 h-16 bg-orange-500 rounded-lg opacity-20"></div>
              </div>
              <h3 className="text-lg font-semibold mb-1">{t('showcase.financialSolutions.title')}</h3>
              <p className="text-sm text-muted-foreground">{t('showcase.financialSolutions.description')}</p>
            </div>

            <div className="group cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950 dark:to-indigo-900 rounded-lg mb-4 flex items-center justify-center transition-transform group-hover:scale-[1.02] border border-border/20">
                <div className="w-16 h-16 bg-indigo-500 rounded-lg opacity-20"></div>
              </div>
              <h3 className="text-lg font-semibold mb-1">{t('showcase.dataPlatforms.title')}</h3>
              <p className="text-sm text-muted-foreground">{t('showcase.dataPlatforms.description')}</p>
            </div>

            <div className="group cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950 dark:to-pink-900 rounded-lg mb-4 flex items-center justify-center transition-transform group-hover:scale-[1.02] border border-border/20">
                <div className="w-16 h-16 bg-pink-500 rounded-lg opacity-20"></div>
              </div>
              <h3 className="text-lg font-semibold mb-1">{t('showcase.multiTenantSaas.title')}</h3>
              <p className="text-sm text-muted-foreground">{t('showcase.multiTenantSaas.description')}</p>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Contact Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">{t('contact.title')}</h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            {t('contact.description')}
          </p>
          <div id="contact" className="bg-card border border-border/50 rounded-lg p-1 scroll-mt-12">
            <div style={{height:"600px"}}>
              <CalBooking />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
