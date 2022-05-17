import Link from "next/link"

export default function Navbar() {
    return (
        <>
        <nav className="app-navigation">
            <Link href="/" passHref><a href="">Home</a></Link>
            <Link href="/bio" passHref><a href="">Bio</a></Link>
        </nav>
        </>
    )
}