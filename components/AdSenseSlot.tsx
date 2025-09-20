'use client'
import { useEffect } from 'react'
export default function AdSenseSlot({ slot }:{slot:string}){
  useEffect(()=>{ try{ /* @ts-ignore */ (window as any).adsbygoogle = (window as any).adsbygoogle || []; (window as any).adsbygoogle.push({}) }catch{} },[])
  return <ins className="adsbygoogle" style={{display:'block'}} data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT} data-ad-slot={slot} data-ad-format="auto" data-full-width-responsive="true"></ins>
}
