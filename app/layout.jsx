import '@styles/globals.css';
import Header from '@components/Header';
import Providers from "@pages/Provider";
export const metadata = {
  title: 'Sports Website for Graphic Era Hill University',
  description: 'Built by Varun Kharkwal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
        <Header />
        {children}
        </Providers>
      </body>
    </html>
  )
}