import Image from "next/image";
import logo from "../assets/logo.png";

const SecondTopNav = () => {
    return (
        <div className="secondtopnav">
            <div className="nav-logo">
                <Image src={logo} alt="Logo" width={120} height={40} />
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
                <span><i className="fa-solid fa-code-compare"></i></span>
                <span><i className="fa-solid fa-heart"></i></span>
                <div className="myCart">
                    <i className="fa-solid fa-cart-shopping mt-1 me-2"></i>
                    <div className="carts">
                        <strong>My Cart</strong>
                        <article className="itemCout">0 Item(s)</article>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondTopNav;
