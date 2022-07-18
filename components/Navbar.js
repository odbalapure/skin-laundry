import Link from "next/link";
import { dashboard } from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand fs-4">Skin Laundry</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <span className="nav-link" aria-current="page">
                <Link href="/"><span className={dashboard}>Home</span></Link>
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" aria-current="page">
                <Link href="/signup"><span className={dashboard}>Signup</span></Link>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
