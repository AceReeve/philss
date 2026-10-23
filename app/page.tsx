import Header from '@/components/header'
import HomeHero from '@/components/home-hero'
import PageLoader from '@/components/page-loader'
import SiteFooter from '@/components/site-footer'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, CircleDot, Flag, Focus, ShieldCheck, ShoppingBag, Truck } from 'lucide-react'

const SHOW_ACTIVITIES = false

const IMAGES = {
  aside: '/philss-hero-2.jpg',
  drivers: 'https://images.unsplash.com/photo-1592919505780-303950717480?auto=format&fit=crop&w=1400&q=80',
  balls: 'https://images.unsplash.com/photo-1562204320-31975a5e09ce?auto=format&fit=crop&w=1400&q=80',
  devices: 'https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?auto=format&fit=crop&w=1400&q=80',
  highlight: 'https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&w=1400&q=80',
}

const PERKS = [
  {
    num: '01',
    icon: ShoppingBag,
    title: 'Premium Golf Goods',
    desc: 'Clubs, balls, and accessories with clear line-by-line pricing.',
  },
  {
    num: '02',
    icon: ShieldCheck,
    title: 'Trusted Quality Options',
    desc: 'Curated lines chosen for durable finishes and practical play.',
  },
  {
    num: '03',
    icon: Truck,
    title: 'Stock & Support Ready',
    desc: 'Availability updates and dependable help after you order.',
  },
]

const CATEGORIES = [
  {
    href: '/products?category=Drivers',
    image: IMAGES.drivers,
    icon: Flag,
    title: 'Drivers',
    desc: 'Distance-first clubs for the tee box.',
  },
  {
    href: '/products?category=Golf+Balls',
    image: IMAGES.balls,
    icon: CircleDot,
    title: 'Golf Balls',
    desc: 'Tour-grade and training-ready balls.',
  },
  {
    href: '/products?category=Distance+Measuring+Devices',
    image: IMAGES.devices,
    icon: Focus,
    title: 'Distance Devices',
    desc: 'Rangefinders and yardage tools.',
  },
]

export default function Home() {
  return (
    <PageLoader>
      <div className="min-h-screen bg-[#f7f4ea]">
        <Header />

        <HomeHero>
          <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
              <div className="space-y-6 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-left-6 motion-safe:duration-[1800ms]">
                <p className="font-serif text-sm uppercase tracking-[0.28em] text-secondary">
                  Philippine golf shop
                </p>
                <h1 className="font-serif text-balance text-5xl font-medium leading-[1.1] text-white md:text-6xl">
                  Play the course with <span className="text-secondary">PHILSS</span>
                </h1>
                <p className="max-w-lg text-lg leading-relaxed text-white/85">
                  A clubhouse-style shop for golf equipment, with destinations and activities backed by accredited local
                  partners. Gear up first, then plan the round.
                </p>
                <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                  <Link href="/products">
                    <Button
                      size="lg"
                      className="w-full rounded-full bg-secondary text-primary hover:bg-secondary/90 sm:w-auto"
                    >
                      <ShoppingBag className="mr-2 h-5 w-5" />
                      Shop the Pro Shop
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full rounded-full border-white/40 bg-white/10 text-white hover:bg-white/20 sm:w-auto"
                    >
                      About PHILSS
                    </Button>
                  </Link>
                </div>
              </div>

              <aside className="relative motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-right-6 motion-safe:delay-300 motion-safe:duration-[1800ms]">
                <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[2rem] border-2 border-secondary/80 shadow-[0_24px_60px_rgba(16,36,28,0.45)] lg:max-w-none">
                  <Image
                    src={IMAGES.aside}
                    alt="Fairway view from the PHILSS clubhouse collection"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 90vw, 42vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10241c]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="font-serif text-2xl text-white">Ready for the fairway</p>
                    <p className="mt-1 text-sm text-white/80">Golf goods, destinations, and trusted support</p>
                  </div>
                </div>
                <div className="absolute -left-3 top-8 hidden rounded-2xl border border-secondary/50 bg-primary px-5 py-4 text-white shadow-xl sm:block">
                  <div className="font-serif text-3xl text-secondary">1000+</div>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-white/75">Golf products</p>
                </div>
                <div className="absolute -right-2 bottom-28 hidden rounded-2xl border border-primary/10 bg-[#f7f4ea] px-5 py-4 shadow-xl sm:block">
                  <div className="font-serif text-3xl text-primary">50+</div>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Destinations</p>
                </div>
              </aside>
            </div>
          </div>
        </HomeHero>

        <section className="border-y border-primary/10 bg-[#f7f4ea]">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
            {PERKS.map((perk) => (
              <div key={perk.title} className="flex gap-4">
                <span className="font-serif text-2xl text-secondary">{perk.num}</span>
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <perk.icon className="h-5 w-5 text-primary" />
                    <h2 className="font-serif text-xl text-foreground">{perk.title}</h2>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{perk.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-secondary">Clubhouse picks</p>
              <h2 className="mt-2 font-serif text-4xl text-foreground">Shop the collection</h2>
              <p className="mt-3 max-w-xl text-muted-foreground">
                Start with the categories golfers usually check before a round.
              </p>
            </div>
            <Link href="/products">
              <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary/5">
                View all products
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-5 md:grid-rows-2">
            {CATEGORIES.map((category, index) => (
              <Link
                key={category.title}
                href={category.href}
                className={`group relative min-h-[240px] overflow-hidden rounded-3xl ${
                  index === 0 ? 'md:col-span-3 md:row-span-2 md:min-h-[520px]' : 'md:col-span-2'
                }`}
              >
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes={index === 0 ? '(max-width: 768px) 100vw, 60vw' : '(max-width: 768px) 100vw, 40vw'}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10241c]/90 via-[#10241c]/25 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <category.icon className="mb-2 h-5 w-5 text-secondary" />
                  <h3 className="font-serif text-2xl">{category.title}</h3>
                  <p className="mt-1 text-sm text-white/80">{category.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto grid max-w-7xl items-stretch gap-0 md:grid-cols-2">
            <div className="relative min-h-[320px] md:min-h-[480px]">
              <Image
                src={IMAGES.highlight}
                alt="Golf bag and clubs ready for play"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-16">
              <p className="text-sm uppercase tracking-[0.22em] text-secondary">Why PHILSS gear</p>
              <h2 className="mt-3 font-serif text-4xl">Built for regular play, not just display</h2>
              <ul className="mt-8 space-y-5">
                {[
                  ['Reliable build', 'Product lines selected for durability and everyday golf use.'],
                  ['Clear specs', 'Straightforward listings with category, details, and pricing.'],
                  ['Ready stock focus', 'Fast visibility of available items before checkout.'],
                  ['Support friendly', 'Easy follow-up for inquiries, orders, and clarifications.'],
                ].map(([title, desc]) => (
                  <li key={title} className="border-l-2 border-secondary pl-4">
                    <h3 className="font-serif text-xl">{title}</h3>
                    <p className="mt-1 text-sm text-white/75">{desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {SHOW_ACTIVITIES ? (
          <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl text-foreground">Golf activities</h2>
            <p className="mt-3 text-muted-foreground">
              Plan golf activities and hotel-ready packages with assistance endorsed to accredited partners.
            </p>
          </section>
        ) : null}

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] border border-secondary/40 bg-primary px-8 py-14 text-primary-foreground md:px-16">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-secondary/15" />
            <div className="relative max-w-2xl">
              <h2 className="font-serif text-4xl md:text-5xl">Ready for the next round?</h2>
              <p className="mt-4 text-lg text-white/80">
                Join golfers who trust PHILSS for equipment, destinations, and dependable support.
              </p>
              <Link href="/auth/signup" className="mt-8 inline-block">
                <Button size="lg" className="rounded-full bg-secondary text-primary hover:bg-secondary/90">
                  Create an account
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </PageLoader>
  )
}
