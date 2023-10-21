

function DigitalSection() {
  return (
    <div className=" bg-blue-950 flex lg:flex-row flex-col items-center lg:py-36 px-4 py-10 gap-3">
        <div className="left flex items-center flex-col lg:flex-row lg:w-[80%] gap-3">
            <div className="left-content md:w-[85%] lg:w-[55%] md:h-fit text-center border rounded-lg p-8 py-12 bg-white lg:relative left-16">
                <p className=" text-lg font-normal mb-4">Who we are</p>
                <h3 className="text-4xl lg:text-[2.7rem] font-bold leading-snug">Empowering the connection</h3>
                <p className=" text-base font-normal mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            <img className="lg:w-[50%] w-[100%] lg:h-[550px] object-cover rounded-lg" src="https://show.moxcreative.com/virtuware/wp-content/uploads/sites/39/2021/12/business-meeting-and-teamwork-by-business-people-1.jpg" alt="team"  />
        </div>
        <div className="right text-white p-2 pl-10 text-left">
            <h2 className="text-4xl font-bold leading-snug md:w-96 ">The value of the digital world.</h2>

            <div className="list pl-20">
                <div className="list-point mt-9 md:text-left text-center">
                    <h4 className="text-2xl font-semibold">Business App</h4>
                    <p className=" md:w-[70%]">Aliquet sapien quisque euismod senectus fames inceptos non amet suspendisse etiam porta</p>
                </div>

                <div className="list-point mt-9 md:text-left text-center">
                    <h4 className="text-2xl font-semibold">Marketing Tools</h4>
                    <p className=" md:w-[70%]">Aliquet sapien quisque euismod senectus fames inceptos non amet suspendisse etiam porta</p>
                </div>

                <div className="list-point mt-9 md:text-left text-center">
                    
                    <h4 className=" text-2xl font-semibold">eCommerce Analytics</h4>
                    <p className=" md:w-[70%]">Aliquet sapien quisque euismod senectus fames inceptos non amet suspendisse etiam porta</p>
                </div>
                <div className="list-point mt-9 md:text-left text-center">
                    <h4 className="text-2xl font-semibold">CRM</h4>
                    <p className=" md:w-[70%]">Aliquet sapien quisque euismod senectus fames inceptos non amet suspendisse etiam porta</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default DigitalSection