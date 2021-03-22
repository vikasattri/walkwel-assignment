import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800 fixed w-full ">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block h-8 rounded-md w-auto"
                  src="http://static1.squarespace.com/static/543d9b11e4b0847bb28295dc/t/55371738e4b0cda0deaebec3/1609186874125/"
                  alt="assignment"
                />
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <a
                    href="/"
                    className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Table view
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="ml-3 relative">
                <div>
                  <button
                    type="button"
                    className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    id="user-menu"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="data:image/jpeg;base64,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"
                      alt="logo"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="/"
              className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Table view
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
