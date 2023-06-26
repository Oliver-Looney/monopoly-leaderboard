'use client'

import {leaderboard} from "@/utils/LeaderboardWins";
import LeaderboardTable from "@/component/LeaderboardTable";
import Timeline from "@/component/Timeline";

export default function Home() {
  return (
    <main className="container">
      <h1>{leaderboard.name}</h1>
      <br/>
      <LeaderboardTable/>
      <br/>
        <Timeline/>
    </main>
  )
}
