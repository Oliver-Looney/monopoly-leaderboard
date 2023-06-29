import Link from "next/link";
import MyLinks from "@/component/MyLinks";
export default function Header(){
    return(
        <header>
            <div className="container">
                <div className="title-and-links">
                    <Link href='https://monopoly.oliverlooney.com/'> <h1 className="h1Title">Monopoly Leaderboard</h1> </Link>
                    <MyLinks/>
                </div>
            </div>
        </header>
    )
}