import mailImg from "../icons/icons8-group-message-48.png"
import integrateImg from "../icons/icons8-device-connection-48.png"
import connectImg from "../icons/icons8-connection-48.png"
import cartImg from "../icons/icons8-buy-48.png"
import chartImg from "../icons/icons8-chart-48.png"


function ServicesSection() {
  return (
    <div className="service-container bg-[#081529] text-white flex md:flex-row flex-col py-5">
        <div className="text-content md:w-[30%] my-auto p-10">
            <h3 className="text-5xl md:font-extrabold font-bold">Listening to you, and answering with software</h3>
            <p className=" font-normal text-base mt-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
        </div>
        <div className="service-list grid md:grid-cols-2 md:gap-12 grid-cols-1 md:w-[68%] pl-5 pr-5">
            
            <div className="list w-[100%] hover:bg-slate-800 transition flex justify-center p-5 rounded-lg">
                <div className="list-text flex md:flex-row flex-col">
                    <img className="mx-auto md:mx-1 w-16 h-16 bg-green-500 rounded-full p-2 bg-opacity-40" src={cartImg} alt="desktop icon"/>
                    <div className="text">
                        <h4 className=" text-2xl font-bold md:w-[60%]">Cart Analytic</h4>
                        <p className=" text-base font-normal md:w-[60%]">Convallis bibendum si mi hac ornare nam id quisque purus dignissim cursus</p>
                    </div>
                </div>
            </div>
            <div className="list w-[100%] hover:bg-slate-800 transition flex justify-center p-5 rounded-lg">
                <div className="list-text flex md:flex-row flex-col">
                    <img className="mx-auto md:mx-1 w-16 h-16 bg-blue-500 rounded-full p-2 bg-opacity-40" src={chartImg} alt="desktop icon"/>
                    <div className="text">
                        <h4 className=" text-2xl font-bold md:w-[60%]">Performance Indecator</h4>
                        <p className=" text-base font-normal md:w-[60%]">Convallis bibendum si mi hac ornare nam id quisque purus dignissim cursus</p>
                    </div>
                </div>
            </div>
            <div className="list w-[100%] hover:bg-slate-800 transition flex justify-center p-5 rounded-lg">
                <div className="list-text flex md:flex-row flex-col">
                    <img className="mx-auto md:mx-1 w-16 h-16 bg-sky-500 rounded-full p-2 bg-opacity-40" src={mailImg} alt="desktop icon"/>
                    <div className="text">
                        <h4 className=" text-2xl font-bold md:w-[60%]">Email Marketing</h4>
                        <p className=" text-base font-normal md:w-[60%]">Convallis bibendum si mi hac ornare nam id quisque purus dignissim cursus</p>
                    </div>
                </div>
            </div>
            <div className="list w-[100%] hover:bg-slate-800 transition flex justify-center p-5 rounded-lg">
                <div className="list-text flex md:flex-row flex-col">
                    <img className="mx-auto md:mx-1 w-16 h-16 bg-slate-500 rounded-full p-2 bg-opacity-40" src={integrateImg} alt="desktop icon"/>
                    <div className="text">
                        <h4 className=" text-2xl font-bold md:w-[60%]">Integration</h4>
                        <p className=" text-base font-normal md:w-[60%]">Convallis bibendum si mi hac ornare nam id quisque purus dignissim cursus</p>
                    </div>
                </div>
            </div>
            <div className="list w-[100%] hover:bg-slate-800 transition flex justify-center p-5 rounded-lg">
                <div className="list-text flex md:flex-row flex-col">
                    <img className="mx-auto md:mx-1 w-16 h-16 bg-yellow-500 rounded-full p-2 bg-opacity-40" src={connectImg} alt="desktop icon"/>
                    <div className="text">
                        <h4 className=" text-2xl font-bold md:w-[60%]">CRM Tool</h4>
                        <p className=" text-base font-normal md:w-[60%]">Convallis bibendum si mi hac ornare nam id quisque purus dignissim cursus</p>
                    </div>
                </div>
            </div>
            <div className="list w-[100%] hover:bg-slate-800 transition flex justify-center p-5 rounded-lg">
                <div className="list-text flex md:flex-row flex-col">
                    <img className="mx-auto md:mx-1 w-16 h-16 bg-orange-500 rounded-full p-2 bg-opacity-40" src={cartImg} alt="desktop icon"/>
                    <div className="text">
                        <h4 className=" text-2xl font-bold md:w-[60%]">Mobile Support</h4>
                        <p className=" text-base font-normal md:w-[60%]">Convallis bibendum si mi hac ornare nam id quisque purus dignissim cursus</p>
                    </div>
                </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default ServicesSection