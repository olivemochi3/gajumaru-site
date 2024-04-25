import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/app/components/hero'
import Services from './components/services'
import Contact from './components/contact'
import { Button } from "@/components/ui/button"

const navItems = [
  { label: 'Top', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative">
        <header className="bg-transparent h-16 flex items-center justify- font-bold absolute top-0 left-0 right-0 z-10">
          <div className="text-xl flex items-center">
            <Link href="/">
              <Image
                src="/ガジュマルロゴ.png"
                alt="株式会社ガジュマル"
                width={50}
                height={50}
              />
            </Link>
            <h1 className="text-[10px]">株式会社ガジュマル</h1>
          </div>
          <ul className="flex gap-4 font-bold">
            {navItems.map((item) => (
              <li key={item.label}>
                <Button variant="ghost" asChild>
                  <Link href={item.href} className="font-bold text-white">{item.label}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </header>

        <div className="h-screen bg-[url('/hero.jpg')] bg-cover bg-center flex items-center">
          <div className="container mx-auto text-center">
            <Hero />
          </div>
        </div>
      </div>

      <main>
        <Services />
        <Contact />
      </main>

      <footer className="container sticky top-full h-10 flex items-center border-t justify-between font-bold bg-green-300">
        <p>&copy; 株式会社ガジュマル</p>
      </footer>
    </div>
  )
}