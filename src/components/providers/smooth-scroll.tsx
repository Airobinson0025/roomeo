'use client'
import { ReactLenis, useLenis } from 'lenis/react'


type SmoothScrollProps = {
    children: React.ReactNode
    
}

export function SmoothScroll({children}: SmoothScrollProps) {
    
    return (
        <ReactLenis root>
        {children}
        </ReactLenis>
  )
}