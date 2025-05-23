import { Container } from 'react-bootstrap';
import Link from 'next/link';

export default function AccountLayout({ children }) {
  return (
   <>
   <Container>
     <div className="account-container">
      <div className="account-sidebar">
        <h2 className="sidebar-title">My Account</h2>
        <nav className="sidebar-nav">
          <article>
            <Link href="/useraccount/editaccount" className="nav-link active">
            <i className="icon-user"></i>
            <span>Edit Profile</span>
          </Link>
          </article>
          <Link href="/useraccount/changepassword" className="nav-link">
            <i className="icon-lock"></i>
            <span>Change Password</span>
          </Link>
          <Link href="/account/orders" className="nav-link">
            <i className="icon-history"></i>
            <span>Order History</span>
          </Link>
          <Link href="/logout" className="nav-link logout">
            <i className="icon-logout"></i>
            <span>Log Out</span>
          </Link>
        </nav>
      </div>
      <div className="account-content">
        {children}
      </div>
    </div>
   </Container>
   </>
  )
}