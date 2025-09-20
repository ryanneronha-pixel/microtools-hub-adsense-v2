'use client'
import { useState } from 'react'
import AdSenseSlot from '@/components/AdSenseSlot'

const firsts = ['Avery','Jordan','Taylor','Riley','Alex','Sam','Casey','Morgan','Jamie','Quinn']
const lasts = ['Rivera','Patel','Nguyen','Smith','Garcia','Kim','Brown','Wilson','Chen','Martinez']

function pick(arr:any[]){ return arr[Math.floor(Math.random()*arr.length)] }

export default function NameGenPage(){
  const [name, setName] = useState('Tap Generate')
  return (
    <section className="grid" style={{gap:16}}>
      <h1 style={{margin:0}}>Random Name Generator</h1>
      <AdSenseSlot slot="0000004001" />
      <div className="card center">
        <div className="small">Your random name</div>
        <div style={{fontWeight:800,fontSize:'28px',margin:'8px 0'}}>{name}</div>
        <button className="btn" onClick={()=>setName(pick(firsts)+' '+pick(lasts))}>Generate</button>
      </div>
      <AdSenseSlot slot="0000004002" />
    </section>
  )
}
