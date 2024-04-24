import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const navItems = [
  { label: 'Top' , href: '/' },
  { label: 'Services' , href: '/services' },
  { label: 'Contact' , href: '/contact' },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={cn(inter.className, 'min-h-dvh flex flex-col')}>
          <header className="container h-16 flex items-center border-b justify-between">
            <h1 className="font-bold">株式会社ガジュマル</h1>
              <ul className="flex gap-4">
                {navItems.map((item) => (
                <li key={item.label}>
                <Button variant="ghost" asChild>
                  <a href={item.href}>{item.label}</a>
                </Button>
                </li>
              ))}
              </ul>
          </header>
        
        <main>{children}</main>

        <footer className="container sticky top-full h-16 flex items-center border-t justify-between">
          <p>&copy; 株式会社ガジュマル</p>
        </footer>
      </body>
    </html>
  );
}