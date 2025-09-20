import './globals.css'
import Script from 'next/script'
import Link from 'next/link'

export const metadata = {
  title: 'MicroTools Hub',
  description: 'Free online tools · Ad-supported with Google AdSense',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <header className="header">
          <div className="wrap" style={padding:'14px 0'}>
            <nav style={display:'flex',gap:12,alignItems:'center'}>
              <Link href="/">MicroTools Hub</Link>
              <Link href="/tools">All Tools</Link>
              <Link href="/privacy" style={marginLeft:'auto'}>Privacy</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>
        <main className="wrap" style={padding:'24px 0'}>{children}</main>
        <footer className="footer">
          <div className="wrap" style={padding:'20px 0',fontSize:14,color:'#555'}>
            © 2025 MicroTools Hub · <a href="/ads.txt">ads.txt</a>
          </div>
        </footer>
        <Script
          id="adsense"
          async
          strategy="afterInteractive"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT}`}
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
