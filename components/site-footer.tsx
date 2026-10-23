import Image from 'next/image'
import Link from 'next/link'

const SHOW_ACTIVITIES = false

export default function SiteFooter() {
  return (
    <footer className="border-t-2 border-secondary/40 bg-primary py-12 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 inline-block" aria-label="PHILSS home">
              <Image
                src="/philss-logo.svg"
                alt="PHILSS"
                width={180}
                height={180}
                className="h-9 w-9 object-contain"
              />
            </Link>
            <p className="text-sm text-white/70">Your trusted partner in golf, travel, and adventure.</p>
          </div>
          <div>
            <h4 className="mb-3 font-serif font-semibold text-white">Explore</h4>
            <ul className="space-y-2 text-sm">
              {SHOW_ACTIVITIES ? (
                <li>
                  <Link href="/tours" className="text-white/70 hover:text-secondary">
                    Activities
                  </Link>
                </li>
              ) : null}
              <li>
                <Link href="/products" className="text-white/70 hover:text-secondary">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/70 hover:text-secondary">
                  About us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-serif font-semibold text-white">Policies</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/company-policy" className="text-white/70 hover:text-secondary">
                  Company policy
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-white/70 hover:text-secondary">
                  Refund policy
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-white/70 hover:text-secondary">
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-serif font-semibold text-white">Contact</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="mailto:info@philss.com" className="hover:text-secondary">
                  info@philss.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/15 pt-8 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} PHILSS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
