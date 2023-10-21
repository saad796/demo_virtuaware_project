import Navbar from './Navbar'

function Header() {
  return (
    <div className='header bg-blue-900 pb-0'>
        <Navbar/>
        <div className="header-content flex lg:flex-row flex-col items-center">
            <img src="https://show.moxcreative.com/virtuware/wp-content/uploads/sites/39/2021/12/multidevice_mockup_1.png" alt="devices" className='lg:w-[55%] w-[100%] z-10' />
            <div className="content text-white flex flex-col justify-center px-4 text-center md:text-left ">
                {/* font icon */}
                <p className=' text-lg'>Welcome to virtuware</p>
                <h3 className='text-6xl font-bold'>Listening to you, and answering with software.</h3>
                <p className='text-lg font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <div className="download-btn lg:mb-0 mb-4 mt-4 flex gap-2 justify-center md:justify-evenly z-10">
                    <a href='#' ><img src="https://show.moxcreative.com/virtuware/wp-content/uploads/sites/39/2021/12/Google-Play_button.png" alt='play store' /></a>
                    <a href='#'><img src="https://show.moxcreative.com/virtuware/wp-content/uploads/sites/39/2021/12/App-Store_button.png" alt='app store' /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header