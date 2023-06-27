'use client'

import {leaderboard} from "@/utils/LeaderboardWins";
import LeaderboardTable from "@/component/LeaderboardTable";
import Timeline from "@/component/Timeline";
import TotalWinsGraph from "@/component/TotalWinsGraph";
import PositionsGraph from "@/component/PositionsGraph";

export default function Home() {
  return (
    <main className="container">
      <h1>{leaderboard.name}</h1>
        <h3>Test data:</h3>
      <br/>
      <LeaderboardTable/>

        <div className="card">
            <TotalWinsGraph leaderboard={leaderboard}/>
        </div>

        <br/>
        <div className="card">
            <PositionsGraph leaderboard={leaderboard}/>
        </div>

        <br/>
        <Timeline/>
    </main>
  )
}
