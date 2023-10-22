

function Navbar() {
  return (
        <nav className="navbar-container flex p-4">
            <img className="logo" src="https://show.moxcreative.com/virtuware/wp-content/uploads/sites/39/elementor/thumbs/logo_virtuware-phxjduj7ogt1jsvuam06i0flkyz2adrtu9iczc2i2o.png" alt="logo" />
            <div className="nav-elements ml-auto flex  gap-2 items-center">
            <input className="hidden" type="checkbox" id="menu-toggle" />
            <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
            <nav>
                <ul className="nav-list lg:flex hidden gap-5 font-medium text-white  ">
                    <li className="hover:text-blue-500 cursor-pointer duration-100">Home</li>
                    <li className="hover:text-blue-500 cursor-pointer duration-100">About Us</li>
                    <li className="hover:text-blue-500 cursor-pointer duration-100">
                        <div className="hs-dropdown relative inline-flex [--trigger:hover]">
                        <button id="hs-dropdown-hover-event" type="button" className="hs-dropdown-toggle flex items-center gap-3">
                            Services
                            <svg className="hs-dropdown-open:rotate-180 w-2.5 h-2.5 font-bold" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </button>

                        <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-fit bg-white shadow-md rounded-lg p-2 mt-2 after:h-4 after:absolute after:-bottom-4 after:left-0 after:w-full before:h-4 before:absolute before:-top-4 before:left-0 before:w-full" aria-labelledby="hs-dropdown-hover-event">
                            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 " href="#">
                            Newsletter
                            </a>
                            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 " href="#">
                            Purchases
                            </a>
                            
                        </div>
                        </div>
                    </li>
                    <li className="hover:text-blue-500 cursor-pointer duration-100">Contact Us</li>
                    <li className="hover:text-blue-500 cursor-pointer duration-100">
                        <div className="hs-dropdown relative inline-flex [--trigger:hover]">
                        <button id="hs-dropdown-hover-event" type="button" className="hs-dropdown-toggle flex items-center gap-3">
                            Pages
                            <svg className="hs-dropdown-open:rotate-180 w-2.5 h-2.5 font-bold" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </button>

                        <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-fit bg-white shadow-md rounded-lg p-2 mt-2 after:h-4 after:absolute after:-bottom-4 after:left-0 after:w-full before:h-4 before:absolute before:-top-4 before:left-0 before:w-full" aria-labelledby="hs-dropdown-hover-event">
                            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 " href="#">
                            Newsletter
                            </a>
                            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 " href="#">
                            Purchases
                            </a>
                            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 " href="#">
                            Downloads
                            </a>
                            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 " href="#">
                            Team Account
                            </a>
                        </div>
                        </div>
                    </li>
                    
                    
                </ul>
                
            </nav>
            </div>

                <label value="menu-toggle" className="cursor-pointer lg:hidden block">
                    <svg
                    className="fill-current text-gray-900"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    >
                    <title>menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </label>

                <div className="nav-buttton ml-6 md:flex hidden gap-4">
                    <button className="login border-2 border-white px-6 py-2 font-medium text-white bg-transparent hover:text-sky-400 hover:border-sky-400 cursor-pointer duration-100">Login</button>
                    <button className="register px-4 py-2 bg-blue-500 text-white font-medium border-2 border-blue-500 hover:bg-sky-400 cursor-pointer duration-100">Register Now</button>
                </div>
            </div>
        </nav>
  )
}

export default Navbar