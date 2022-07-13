import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
        <ul>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      <Outlet />
    </>
  )
};

export default Layout;