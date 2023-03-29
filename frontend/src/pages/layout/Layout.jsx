import { Outlet, Link } from "react-router-dom";

//STYLES
import "./Layout.css";

export const Layout = () => {
  return (
    <>
      <header>
        <div className="header-container">
          <div className="navbar-logo-container">
            <nav className="navbar">
              <ul>
                <li>
                  <Link to="/admin/product-list">Home</Link>
                </li>
              </ul>
            </nav>
            <div className="logo"></div>
          </div>

          <div className="search-container">
            <div className="search"></div>
            <div className="search-icon"></div>
          </div>

          <div className="avatar-cart-container">
            <div className="avatar"></div>
            <div className="cart">
              🛒
              <div className="notification">0</div>
            </div>
          </div>
        </div>
      </header>

      <Outlet />
    </>
  );
};
