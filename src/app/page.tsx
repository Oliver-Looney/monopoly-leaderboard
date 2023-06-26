'use client'

import styles from './page.module.css'
import {leaderboard} from "@/utils/LeaderboardWins";
import LeaderboardTable from "@/component/LeaderboardTable";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>{leaderboard.name}</h1>
      <br/>
      <LeaderboardTable/>
      <br/>
    </main>
  )
}
