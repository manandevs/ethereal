import React from 'react';

const Navbar = () => {
  return (
    <div>
      <header className="fixed top-0 z-50 w-full">
        <div className="container p-3">
          <nav className="flex items-center py-3 px-4 justify-between">
            {/* --- Logo Section --- */}
            <div className="flex items-center">
              <a href="/">
                {/* Light Mode Logo */}
                <img
                  alt="logo"
                  width="117"
                  height="34"
                  decoding="async"
                  data-nimg="1"
                  className="dark:hidden"
                  style={{ color: 'transparent', width: 'auto', height: 'auto' }}
                  src="/images/logo/logo.svg?dpl=dpl_526GsNPXLtj2R4QUzsirBtph2nrF"
                />
                {/* Dark Mode Logo */}
                <img
                  alt="logo"
                  loading="lazy"
                  width="160"
                  height="50"
                  decoding="async"
                  data-nimg="1"
                  className="dark:block hidden"
                  style={{ color: 'transparent', width: 'auto', height: 'auto' }}
                  src="/images/logo/DarkModeLogo.svg?dpl=dpl_526GsNPXLtj2R4QUzsirBtph2nrF"
                />
              </a>
            </div>

            {/* --- Desktop Menu --- */}
            <nav
              data-slot="navigation-menu"
              className="group/navigation-menu relative max-w-max flex-1 items-center justify-center hidden lg:flex bg-dark_black/5 dark:bg-white/5 rounded-full p-1"
            >
              <ul
                aria-orientation="horizontal"
                data-slot="navigation-menu-list"
                className="group flex-1 items-center justify-center flex gap-0 2xl:gap-1.5 list-none"
              >
                {['About us', 'Services', 'Work', 'Team', 'Pricing', 'Awards'].map((item) => (
                  <li key={item} data-slot="navigation-menu-item" className="relative">
                    <a
                      data-slot="navigation-menu-link"
                      className="data-[active=true]:focus:bg-muted data-[active=true]:hover:bg-muted data-[active=true]:bg-muted/50 focus-visible:ring-ring/50 flex items-center gap-1.5 p-2 transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4 px-4 py-2 text-base font-medium hover:text-black dark:hover:text-black hover:bg-white hover:rounded-3xl hover:shadow-header_shadow text-dark_black/60 dark:text-white focus:bg-white bg-transparent rounded-sm"
                      href={`/#${item.toLowerCase().replace(' ', '')}`}
                    >
                      {item}
                    </a>
                  </li>
                ))}
                
                {/* Contact Link (Separate because of URL structure usually) */}
                <li data-slot="navigation-menu-item" className="relative">
                  <a
                    data-slot="navigation-menu-link"
                    className="data-[active=true]:focus:bg-muted data-[active=true]:hover:bg-muted data-[active=true]:bg-muted/50 focus-visible:ring-ring/50 flex items-center gap-1.5 p-2 transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4 px-4 py-2 text-base font-medium hover:text-black dark:hover:text-black hover:bg-white hover:rounded-3xl hover:shadow-header_shadow text-dark_black/60 dark:text-white focus:bg-white rounded-sm"
                    href="/contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>

            {/* --- Right Actions (Sign In / Theme Toggle / Mobile Menu) --- */}
            <div className="flex items-center gap-1 xl:gap-4">
              <div className="flex items-center gap-2">
                <a
                  className="hidden lg:block bg-transparent border border-dark_black dark:border-white/50 text-primary px-2.5 xl:px-4 py-2 rounded-full hover:bg-dark_black hover:text-white"
                  href="/signin"
                >
                  Sign In
                </a>
                <a
                  className="hidden lg:block text-white px-2.5 xl:px-4 py-2 bg-dark_black dark:bg-white/20 rounded-full hover:opacity-90"
                  href="/signup"
                >
                  Sign Up
                </a>
              </div>

              {/* Theme Toggle Button */}
              <button
                aria-label="theme toggler"
                className="group flex h-8 w-8 items-center justify-center duration-300"
              >
                <span className="group-hover:rotate-180 transition-transform duration-700 ease-in-out">
                  {/* Sun Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--ri hidden dark:block"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 18a6 6 0 1 1 0-12a6 6 0 0 1 0 12M11 1h2v3h-2zm0 19h2v3h-2zM3.515 4.929l1.414-1.414L7.05 5.636L5.636 7.05zM16.95 18.364l1.414-1.414l2.121 2.121l-1.414 1.414zm2.121-14.85l1.414 1.415l-2.121 2.121l-1.414-1.414zM5.636 16.95l1.414 1.414l-2.121 2.121l-1.414-1.414zM23 11v2h-3v-2zM4 11v2H1v-2z"
                    />
                  </svg>
                  {/* Moon Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--ri dark:hidden"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style={{ color: 'rgb(0, 0, 0)' }}
                  >
                    <path
                      fill="currentColor"
                      d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22C6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981"
                    />
                  </svg>
                </span>
              </button>

              {/* Mobile Menu Trigger */}
              <div className="hidden max-lg:flex">
                <button
                  type="button"
                  tabIndex="0"
                  data-base-ui-click-trigger=""
                  id="base-ui-_R_vllb_"
                  data-slot="sheet-trigger"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="1.5"
                      d="M4.5 12h15m-15 5.77h15M4.5 6.23h15"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;