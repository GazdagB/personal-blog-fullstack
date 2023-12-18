import { Link } from "react-router-dom";

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Header(){
    return ( <header>
    <Link to="/" className="logo">
      MyBlog
    </Link>
    <nav>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  </header>)
}