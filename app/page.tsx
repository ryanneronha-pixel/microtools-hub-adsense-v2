'use client'
import { useState, useMemo } from 'react'
import AdSenseSlot from '@/components/AdSenseSlot'

export default function TipSplit(){
  const [bill,setBill]=useState(100)
  const [tip,setTip]=useState(18)
  const [people,setPeople]=useState(2)

  const res = useMemo(()=>{
    const tipAmt = bill * tip / 100
    const total = bill + tipAmt
    const per = total / Math.max(1, people)
    return { tipAmt, total, per }
  },[bill, tip, people])

  return (
    <section className="grid" style={{gap:16}}>
      <h1 style={{margin:0}}>Tip & Split Calculator</h1>
      <AdSenseSlot slot="0000000001" />
      <div className="card grid grid-3">
        <div>
          <label className="label">Bill</label>
          <input className="input" type="number" value={bill} onChange={e=>setBill(parseFloat(e.target.value||'0'))} />
        </div>
        <div>
          <label className="label">Tip %</label>
          <input className="input" type="number" value={tip} onChange={e=>setTip(parseFloat(e.target.value||'0'))} />
        </div>
        <div>
          <label className="label">People</label>
          <input className="input" type="number" value={people} onChange={e=>setPeople(parseInt(e.target.value||'1'))} />
        </div>
      </div>
      <div className="card grid grid-3" style={{textAlign:'center'}}>
        <div><div className="small">Tip</div><div style={{fontWeight:700}}>${res.tipAmt.toFixed(2)}</div></div>
        <div><div className="small">Total</div><div style={{fontWeight:700}}>${res.total.toFixed(2)}</div></div>
        <div><div className="small">Per person</div><div style={{fontWeight:700}}>${res.per.toFixed(2)}</div></div>
      </div>
      <AdSenseSlot slot="0000000002" />
    </section>
  )
}
