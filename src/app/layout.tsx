import './globals.css'
import { Inter } from 'next/font/google'
import {leaderboard} from "@/utils/LeaderboardWins";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Monopoly Leaderboard',
  description: `Monopoly Leaderboard"`,
  openGraph: {
    title: `Monopoly Leaderboard\n\nCurrent Winner: ${leaderboard.wins[leaderboard.wins.length - 1].name}\n\n"Name | Value\n--------------------------------\nItem 1 | $10\nItem 2 | $20"`,
    description: `Monopoly Leaderboard\n\nCurrent Winner: ${leaderboard.wins[leaderboard.wins.length - 1].name}\n\n"Name | Value\n--------------------------------\nItem 1 | $10\nItem 2 | $20"`,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
