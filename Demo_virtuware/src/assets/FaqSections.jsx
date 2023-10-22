import FaqAcordion from "./FaqAcordion"


function FaqSections() {
  return (
    <div className="faq-container text-white py-32 flex md:flex-row flex-col  px-10">
        <div className="text-content md:w-[45%]">
            <small className=" text-lg font-normal text-blue-400">FAQ</small>
            <h4 className=" text-5xl font-bold my-6">Frequently Ask Questions.</h4>
            <p className=" text-base font-normal mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="faqs ">
            <div className="hs-accordion-group  flex flex-col gap-6 md:items-end items-center md:mt-2 mt-10">
                <FaqAcordion heading="Lorem ipsum dolor sit?" content="Ultricies erat nascetur himenaeos velit euismod ridiculus nostra mauris. Porttitor aliquet fringilla orci viverra parturient taciti in fermentum torquent. Magnis egestas nunc elit maecenas eleifend rutrum tempus gravida vulputate euismod."/>
                <FaqAcordion heading="dolor sit?" content="Ultricies erat nascetur himenaeos velit euismod ridiculus nostra mauris. Porttitor aliquet fringilla orci viverra parturient taciti in fermentum torquent. Magnis egestas nunc elit maecenas eleifend rutrum tempus gravida vulputate euismod."/>
                <FaqAcordion heading="Lorem ipsum dolor sit?" content="Ultricies erat nascetur himenaeos velit euismod ridiculus nostra mauris. Porttitor aliquet fringilla orci viverra parturient taciti in fermentum torquent. Magnis egestas nunc elit maecenas eleifend rutrum tempus gravida vulputate euismod."/>
                <FaqAcordion heading="Lorem ipsum?" content="Ultricies erat nascetur himenaeos velit euismod ridiculus nostra mauris. Porttitor aliquet fringilla orci viverra parturient taciti in fermentum torquent. Magnis egestas nunc elit maecenas eleifend rutrum tempus gravida vulputate euismod."/>
            </div>
        </div>
    </div>
  )
}

export default FaqSections