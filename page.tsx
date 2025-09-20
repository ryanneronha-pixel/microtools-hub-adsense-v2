import Link from 'next/link'

export default function Page(){
  return (
    <section className="grid" style={{gap:16}}>
      <div className="card">
        <h1 style={{margin:0}}>Useful tools, free to use</h1>
        <p className="small" style={{marginTop:8}}>This site is ad-supported via Google AdSense.</p>
        <div style={{marginTop:12}}>
          <Link href="/tools" className="btn">Browse All Tools</Link>
        </div>
      </div>
      <div className="grid grid-2">
        <Link href="/tools/tip-split" className="card">Tip & Split Calculator</Link>
        <Link href="/tools/loan" className="card">Loan Calculator</Link>
      </div>
    </section>
  )
}
