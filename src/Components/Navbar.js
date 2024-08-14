import React from "react";

function Navbar() {
  return (
      <nav>
          <div className="w-full h-20 bg-white sticky top-0">
              <div className="container mx-auto px-4 h-full">
                  <div className="flex justify-between items-center h-full">
                      <a  href="/"><h1>Alejandra</h1></a>
                      <ul className="hidden md:flex gap-x-6 text-black">
                          <li>
                              <a href="/About">
                                  About Me
                              </a>
                          </li>
                          <li>
                              <a href="/Projects">
                                  Projects
                              </a>
                          </li>
                          <li>
                              <a href="/Resume">
                                  Resume
                              </a>
                          </li>
                          <li>
                              <button>Message me</button>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </nav>
  );
}

export default Navbar;
