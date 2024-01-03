import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar';
import { UserContextProvider } from '@/services/state/user/userContext';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BE-Estate',
  description: 'Real Estate Marketplace',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserContextProvider>
          <NavBar />
          {children}
        </UserContextProvider>
      </body>
    </html>
  )
}
