//PROBAR NAVLINK
import { Outlet, Link } from "react-router-dom";

//STYLES
import "./Layout.css";

const style = {
  color: "white",
  fontSize: "0.6rem",
  display: "flex",
  alignItems: "center",
};

export const Layout = () => {
  return (
    <>
      <header>
        <div className="header-container">
          <div className="navbar-logo-container">
            <nav className="navbar">
              <ul>
                <li className="placeholder-burger">
                  <Link to="/">Home</Link>
                  <Link to="/admin/product-list">Admin</Link>
                </li>
              </ul>
            </nav>
            <div style={style} className="logo">
              Jumbo
            </div>
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
