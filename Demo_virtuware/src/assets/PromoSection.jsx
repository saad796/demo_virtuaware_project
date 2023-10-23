import fireImg from "../icons/icons8-fire-48.png"

function PromoSection() {
  return (
    <div className="promo-container text-white bg-sky-500 flex flex-col md:flex-row md:py-24 py-10">
        <div className="text-content md:w-[50%] px-10 md:py-0 py-10 md:text-left text-center">
          <div className="promo-icon flex items-center">
            <img className=" mr-3 w-10 h-10 bg-white rounded-full p-1" src={fireImg} alt="desktop icon"/>
            <h6 className=" text-lg font-bold md:py-2 py-7">PROMO</h6>
          </div>
            <h3 className=" text-5xl font-bold leading-snug">Save 40% On ALL Lifetime & Yearly Plans</h3>
        </div>
        <div className="btn-container px-5 py-4 md:pl-20">
            <p className=" text-base font-normal md:text-left text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <div className="download-btn lg:mb-0 mb-4 mt-4 flex flex-col md:flex-row gap-6 px-4 py-5">
                <a href='#' ><img src="https://show.moxcreative.com/virtuware/wp-content/uploads/sites/39/2021/12/Google-Play_button.png" alt='play store' /></a>
                <a href='#'><img src="https://show.moxcreative.com/virtuware/wp-content/uploads/sites/39/2021/12/App-Store_button.png" alt='app store' /></a>
            </div>
        </div>
    </div>
  )
}

export default PromoSection