import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'ヘアケアLab',
  description: 'ヘアケア・美髪情報メディア',
  keywords: 'ヘアケアLab,ヘアケア・美髪情報メディア',
  openGraph: {
    title: 'ヘアケアLab',
    description: 'ヘアケア・美髪情報メディア',
    type: 'website',
    locale: 'ja_JP',
    siteName: 'ヘアケアLab',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ヘアケアLab',
    description: 'ヘアケア・美髪情報メディア',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-SVQXY5C3PW"></script>
      <script dangerouslySetInnerHTML={{__html:`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-SVQXY5C3PW');`}} />
      <body>{children}</body>
    </html>
  )
}
