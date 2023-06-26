'use client'

import {leaderboard} from "@/utils/LeaderboardWins";
import LeaderboardTable from "@/component/LeaderboardTable";

export default function Home() {
  return (
    <main className="container">
      <h1>{leaderboard.name}</h1>
      <br/>
      <LeaderboardTable/>
      <br/>
    </main>
  )
}
