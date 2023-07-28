import Link from "next/link";
import style from "./Nav.css";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link className="link" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" href="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="link" href="/help">
            Help
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
