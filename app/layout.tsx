import './globals.css'
// app/layout.tsx
import type { Metadata } from 'next'
import { EmbedBridge, EMBED_PREPAINT_SCRIPT } from '@craudioviz/platform-sdk'
export const dynamic = 'force-dynamic'
export const metadata: Metadata = {
  title: 'Javari Crochet | CR AudioViz AI — EIN 39-3646201',
  description: 'AI-powered crochet pattern and project platform',
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* factory 2026-09-10: marks an embedded page before first paint */}
        <script dangerouslySetInnerHTML={{ __html: EMBED_PREPAINT_SCRIPT }} />
      </head>
      <body style={{ margin: 0, padding: 0, background: '#07080f' }}>
        <EmbedBridge />
        {children}
      </body>
    </html>
  )
}
