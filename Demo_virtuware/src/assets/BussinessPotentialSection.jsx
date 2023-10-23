import stackImg from "../icons/icons8-stack-48.png";
import settingImg from "../icons/icons8-setting-48.png";
import medalImg from "../icons/icons8-medal-48.png";
import lockImg from "../icons/icons8-lock-48.png";


function BussinessPotentialSection() {
  return (
    <div className="Bussiness-portal-container py-16 text-center">
        <small className=" text-base font-normal">Why Choose Us</small>
        <h4 className=" font-bold text-5xl w-[60%] text-center m-auto my-5">Maximize your business potential starting with virtuware</h4>
        <p className=" text-lg font-normal w-[60%] m-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        <div className="portal-grid grid md:grid-cols-2 grid-cols-1 gap-8 px-8 my-12">
            <div className="card bg-green-200 py-20 px-8 rounded-xl">
                <img className="mx-auto w-16 h-16 bg-green-500 rounded-full p-2 bg-opacity-40" src={stackImg} alt="desktop icon"/>
                <h4 className=" text-2xl font-bold my-7">Apps Information</h4>
                <p className=" text-base font-normal text-slate-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

            </div>
            <div className="card bg-blue-200 py-20 px-8 rounded-xl">
                <img className="mx-auto w-16 h-16 bg-blue-500 rounded-full p-2 bg-opacity-40" src={settingImg} alt="desktop icon"/>
                <h4 className=" text-2xl font-bold my-7">Configurable</h4>
                <p className=" text-base font-normal text-slate-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            <div className="card bg-sky-200 py-20 px-8 rounded-xl">
                <img className="mx-auto w-16 h-16 bg-yellow-500 rounded-full p-2 bg-opacity-40" src={medalImg} alt="desktop icon"/>
                <h4 className=" text-2xl font-bold my-7">Proffesional Service</h4>
                <p className=" text-base font-normal text-slate-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            <div className="card bg-pink-200 py-20 px-8 rounded-xl">
                <img className="mx-auto w-16 h-16 bg-red-500 rounded-full p-2 bg-opacity-40" src={lockImg} alt="desktop icon"/>
                <h4 className=" text-2xl font-bold my-7">Secure App</h4>
                <p className=" text-base font-normal text-slate-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
        </div>
    </div>
  )
}

export default BussinessPotentialSection