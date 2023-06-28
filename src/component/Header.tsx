import Link from "next/link";
import MyLinks from "@/component/MyLinks";
export default function Header(){
    return(
        <header>
            <div className="container">
                <div className="title-and-links">
                    <Link href='/'> <h1>Monopoly Leaderboard</h1> </Link>
                    <MyLinks/>
                </div>
            </div>
        </header>
    )
}