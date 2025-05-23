import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";

const SecondTopNav = () => {
    return (
        <div className="secondtopnav">
            <div className="nav-logo">
                <Link href="/">
                <Image src={logo} alt="Logo" width={120} height={40} />
                </Link>
            </div>

            <div className="nav-search">
                <select className="nav-category">
                    <option>All Categories</option>
                    {/* Add more categories if needed */}
                </select>
                <input type="text" placeholder="Search Anything..." className="nav-input" />
                <i className="fa-solid fa-magnifying-glass nav-search-btn"></i>
            </div>

            <div className="nav-icons">
                <Link href="/comparelist">
                <span><i className="fa-solid fa-code-compare"></i></span>
                </Link>
                <Link href="/wishlist">
                <span><i className="fa-solid fa-heart"></i></span>
                </Link>
                <div className="myCart">
                    <Link className="" href="/cart">
                    <i className="fa-solid fa-cart-shopping me-2"></i>
                    <div className="carts">
                        <strong>My Cart</strong>
                        <article className="itemCout">0 Item(s)</article>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SecondTopNav;
