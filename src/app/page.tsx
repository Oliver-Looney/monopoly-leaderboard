'use client'

import {leaderboard} from "@/utils/LeaderboardWins";
import LeaderboardTable from "@/component/LeaderboardTable";
import Timeline from "@/component/Timeline";
import TotalWinsGraph from "@/component/TotalWinsGraph";
import PositionsGraph from "@/component/PositionsGraph";
import Stats from "@/component/Stats";

export default function Home() {
  return (
    <main className="container">
      <h1>{leaderboard.name}</h1>
      <br/>
      <LeaderboardTable/>
        <TotalWinsGraph leaderboard={leaderboard}/>
        <br/>
        <PositionsGraph leaderboard={leaderboard}/>
        <br/>
        <Stats/>
        <Timeline/>
    </main>
  )
}
