'use client'

import {leaderboard} from "@/utils/LeaderboardWins";
import LeaderboardTable from "@/component/LeaderboardTable";
import TotalWinsGraph from "@/component/TotalWinsGraph";
import PositionsGraph from "@/component/PositionsGraph";
import Stats from "@/component/Stats";
import Header from "@/component/Header";

export default function Home() {
  return (
      <main>
          <Header/>
          <div className="container">
              <h1>{leaderboard.name}</h1>
              <br/>
              <LeaderboardTable/>
              <br/>
              <TotalWinsGraph/>
              <br/>
              <PositionsGraph/>
              <br/>
              <Stats/>
              <br/>
              <br/>
          </div>
      </main>
  )
}
