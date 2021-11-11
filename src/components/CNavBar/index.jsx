/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function CNavBar(){
    
    const [hide, setHide] = useState(true)

    return (
        <header>
          <nav
            className="
              flex flex-wrap
              items-center
              justify-between
              w-full
              py-4
              md:py-0
              px-4
              text-md text-gray-700
              
              z-30
              sticky
            "
          >
            <div>
              <a className="text-white text-2md amatic text-3xl" href="#">
                J'AIMAIS
              </a>
            </div>
    
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="menu-button"
              className="h-6 w-6 cursor-pointer md:hidden block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={setHide.bind(this, !hide)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
    
            <div className={`w-full md:flex md:items-center md:w-auto ${hide ? 'hidden' : ''}`}>
              <ul
                className="
                        text-base text-gray-200
                        bg-purple-dark
                        md:bg-transparent
                        md:flex
                        md:justify-between 
                        md:pt-0
                        poiret
                        "
              >
                <li>
                    <NavLink to="/" className="md:p-4 py-2 block transition-colors hover:bg-purple cursor-pointer text-center" activeClassName="border-b-2 border-purple-light" >Home</NavLink>
                </li>
                <li>
                  <a className="md:p-4 py-2 block transition-colors hover:bg-purple cursor-pointer text-center" href="#">
                    Food
                  </a>
                </li>
                <li>
                  <a className="md:p-4 py-2 block transition-colors hover:bg-purple cursor-pointer text-center" href="#">
                    Merchs
                  </a>
                </li>
                <li>
                  <NavLink to="/blogs" className="md:p-4 py-2 block transition-colors hover:bg-purple cursor-pointer text-center" activeClassName="border-b-2 border-purple-light" >Blogs</NavLink>
                </li>
                <li>
                  <a className="md:p-4 py-2 block transition-colors hover:bg-purple cursor-pointer text-center" href="#">
                    About Us
                  </a>
                </li>
                {/*
                  <li>
                    <a
                      className="md:p-4 py-2 block hover:text-purple-400 text-purple-500"
                      href="#"
                    >
                      Sign Up
                    </a>
                  </li>
                */}
              </ul>
            </div>
          </nav>
        </header>
      );

}

export default CNavBar