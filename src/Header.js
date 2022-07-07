import React from "react";
import Search from "./Search";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <NavLink className="py-2 logo" to="/" aria-label="Album Movies">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="d-block mx-auto"
              role="img"
              viewBox="0 0 24 24"
            >
              <title>Movies Album</title>
              <circle cx="12" cy="12" r="10" />
              <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" />
            </svg>
            <span>Movies Album</span>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            {
              // <ul className="navbar-nav me-auto mb-2 mb-md-0">
              //     <li className="nav-item">
              //       <a className="nav-link active" aria-current="page" href="#">
              //         Home
              //       </a>
              //     </li>
              //     <li className="nav-item">
              //       <a className="nav-link" href="#">
              //         Link
              //       </a>
              //     </li>
              //     <li className="nav-item">
              //       <a className="nav-link disabled">Disabled</a>
              //     </li>
              //   </ul>
            }
            <Search/>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
