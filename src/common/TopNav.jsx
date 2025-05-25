import Link from "next/link";


const TopNav=()=>{

    return(
        <nav className="custom-navbar">
      <div className="navleft">
        <article>This is Navbar left</article>
      </div>
      <div className="navright">
        <Link href="/login"><article>My Account</article></Link>
        <article>Language</article>
        <article>Currency</article>
      </div>
    </nav>
    )
}

export default TopNav;