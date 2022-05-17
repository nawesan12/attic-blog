import Link from "next/link"

export default function Navbar() {
    return (
        <>
        <nav className="app-navigation">
            <Link href="/" passHref><a href="">Home</a></Link>
            <Link href="/bio" passHref><a href="">Bio</a></Link>
        </nav>

        <style jsx>{`
            .app-navigation {
                padding:2vh;
                display:flex;
                align-items:center;
                justify-content:center;
                font-weight:500;
            }    

            .app-navigation a {
                margin-inline: calc(.75vw + 1vh);
            }
        `}</style>
        </>
    )
}