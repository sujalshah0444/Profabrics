import './globals.css'

export const metadata = {
  title: 'Profabrics — Premium Fabrics, Kathmandu',
  description: 'Profabrics is a premium fabric and clothing supplier based in Kathmandu, Nepal. Serving tailors, fashion designers, and clothing brands.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
