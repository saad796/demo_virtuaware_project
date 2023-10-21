

function Navbar() {
  return (
        <nav className="navbar-container flex p-4">
            <img className="logo" src="https://show.moxcreative.com/virtuware/wp-content/uploads/sites/39/elementor/thumbs/logo_virtuware-phxjduj7ogt1jsvuam06i0flkyz2adrtu9iczc2i2o.png" alt="logo" />
            <div className="nav-elements ml-auto md:flex hidden gap-2 items-center">
                <ul className="nav-list flex gap-5 font-medium text-white ">
                    <li className="hover:text-blue-500 cursor-pointer duration-100">Home</li>
                    <li className="hover:text-blue-500 cursor-pointer duration-100">About Us</li>
                    <li className="hover:text-blue-500 cursor-pointer duration-100">Services</li>
                    <li className="hover:text-blue-500 cursor-pointer duration-100">Contact Us</li>
                    <li className="hover:text-blue-500 cursor-pointer duration-100">Page</li>
                </ul>
                <div className="nav-buttton ml-6 lg:flex hidden gap-4">
                    <button className="login border-2 border-white px-6 py-2 font-medium text-white bg-transparent hover:text-sky-400 hover:border-sky-400 cursor-pointer duration-100">Login</button>
                    <button className="register px-4 py-2 bg-blue-500 text-white font-medium border-2 border-blue-500 hover:bg-sky-400 cursor-pointer duration-100">Register Now</button>
                </div>
            </div>
            <button className="md:hidden block text-white bg-black ml-auto">\\\</button>
        </nav>
  )
}

export default Navbar