import '@styles/globals.css';
import Header from '@components/Header';
import Providers from "@components/Provider";
export const metadata = {
  title: 'Sports Website for Graphic Era Hill University',
  description: 'Built by Varun Kharkwal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <Header />
          {children}
      </body>
    </html>
  )
}