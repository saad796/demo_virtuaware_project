import fbIcon from "../icons/icons8-facebook-48.png"
import instaIcon from "../icons/icons8-insta-48.png"
import linkedIcon from "../icons/icons8-linked-in-48.png"
import twitterIcon from "../icons/icons8-twitter-48.png"

function Footer() {
  return (
    <div className="footer-container">
        <div className="footer w-full bg-[#040b14] bg-opacity-[0.99] text-white h-full">
            <div className="upper-footer flex flex-col md:flex-row px-8 py-36">

                <div className="logo-container md:w-[30%] pb-10">
                    <img className="logo w-72 py-5" src="https://show.moxcreative.com/virtuware/wp-content/uploads/sites/39/elementor/thumbs/logo_virtuware-phxjduj7ogt1jsvuam06i0flkyz2adrtu9iczc2i2o.png" alt="logo" />
                    <p className=" text-base font-normal">Mus id sollicitudin lectus pharetra nisl euismod taciti nulla suscipit</p>
                </div>
                <div className="link-container flex gap-12 md:px-5 flex-col md:flex-row justify-evenly w-full">

                    <div className="link-list">
                        <h4 className=" text-xl font-bold py-4">Resource</h4>
                        <ul>
                            <li className="py-1 hover:text-blue-800 transition cursor-pointer"><a href="#">Base Knowledge</a></li>
                            <li className="py-1 hover:text-blue-800 transition cursor-pointer"><a href="#">Developer API</a></li>
                            <li className="py-1 hover:text-blue-800 transition cursor-pointer"><a href="#">Blog</a></li>
                            <li className="py-1 hover:text-blue-800 transition cursor-pointer"><a href="#">News & Article</a></li>
                        </ul>
                    </div>

                    <div className="link-list">
                        <h4 className=" text-xl font-bold py-4">Company</h4>
                        <ul className="">
                            <li className="py-1 hover:text-blue-800 transition cursor-pointer"><a href="#">About Us</a></li>
                            <li className="py-1 hover:text-blue-800 transition cursor-pointer"><a href="#">Leadership</a></li>
                            <li className="py-1 hover:text-blue-800 transition cursor-pointer"><a href="#">Careers</a></li>
                            <li className="py-1 hover:text-blue-800 transition cursor-pointer"><a href="#">Press</a></li>
                            <li className="py-1 hover:text-blue-800 transition cursor-pointer"><a href="#">Partners</a></li>
                        </ul>
                    </div>

                    <div className="link-liast">

                        <h4 className=" text-xl font-bold py-4">Support</h4>
                        <ul>
                            <li className="py-1 hover:text-blue-800 transition cursor-pointer"><a href="#">Help Center</a></li>
                            <li className="py-1 hover:text-blue-800 transition cursor-pointer"><a href="#">FAQ</a></li>
                            <li className="py-1 hover:text-blue-800 transition cursor-pointer"><a href="#">Contact Us</a></li>
                            <li className="py-1 hover:text-blue-800 transition cursor-pointer"><a href="#">Community Forum</a></li>
                            <li className="py-1 hover:text-blue-800 transition cursor-pointer"><a href="#">Docs</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bottom-footer border-t-[1px] border-slate-400 flex  flex-col md:flex-row md:items-center px-10 md:h-14 text-center">
                <p className="text-sm font-normal ">Copyright © 2021 virtuware, All rights reserved. Powered by MoxCreative.</p>
                <div className="icon md:ml-auto md:mx-1 mx-auto mt-3 md:mt-0 mb-3 flex gap-5">
                    <img className="w-8 h-8 grayscale hover:grayscale-0 rounded-full p-1" src={fbIcon} alt="desktop icon"/>
                    <img className="w-8 h-8 grayscale hover:grayscale-0 rounded-full p-1" src={instaIcon} alt="desktop icon"/>
                    <img className="w-8 h-8 grayscale hover:grayscale-0 rounded-full p-1" src={linkedIcon} alt="desktop icon"/>
                    <img className="w-8 h-8 grayscale hover:grayscale-0 rounded-full p-1" src={twitterIcon} alt="desktop icon"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer