import { Link } from "@remix-run/react";

export default function NavBar() {
  return (
    <div
      className="div"
      style={{
        display: "flex",
        gap: "1rem",
      }}
    >
      <Link style={{ textDecoration: "none", color: "black" }} to="/">
        Work
      </Link>
      <Link style={{ textDecoration: "none", color: "black" }} to="/chat">
        Chat
      </Link>
      <Link style={{ textDecoration: "none", color: "black" }} to="/">
        Blog
      </Link>
      <Link style={{ textDecoration: "none", color: "black" }} to="/">
        Products
      </Link>
      <Link style={{ textDecoration: "none", color: "black" }} to="/">
        GuestBook
      </Link>
    </div>
  );
}
