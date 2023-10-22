import checkImg from '../icons/icons8-tick-48.png'

function TechnolgySection() {
  return (
    <div className="tech-container flex lg:flex-row flex-col justify-center items-center mt-14 mb-10">
        <div className="text-content lg:w-[40%] px-12">
          <p className="text-blue-700 text-lg font-semibold">Our Technology</p>
          <h3 className="text-5xl font-bold leading-tight text-slate-900">Technology simplified for all</h3>
          <p className="text-lg font-semibold text-slate-600 my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

          <div className="list-point my-4 flex items-start">
            <img className="mx-2" src={checkImg} alt="check"/>
            <div className="text">
                <h4 className="text-2xl font-bold text-slate-900 ">Easy to use</h4>
                <p className="text-lg font-semibold text-slate-600">Aliquet sapien quisque euismod senectus fames inceptos non amet suspendisse etiam porta</p>
            </div>
          </div>
          <div className="list-point my-4 flex items-start">
            <img className="mx-2" src={checkImg} alt="check"/>
            <div className="text">
                <h4 className="text-2xl font-bold text-slate-900 ">Attractive User Interface</h4>
                <p className="text-lg font-semibold text-slate-600">Mollis cursus rutrum penatibus ante senectus massa vestibulum in sed aliquet facilisis</p>
            </div>
          </div>
          <div className="list-point my-4 flex items-start">
            <img className="mx-2" src={checkImg} alt="check"/>
            <div className="text">
                <h4 className="text-2xl font-bold text-slate-900 ">Powerful and Efficient</h4>
                <p className="text-lg font-semibold text-slate-600">Dui dis dolor primis tellus habitant netus ante efficitur cubilia conubia sem</p>
            </div>
          </div>
        </div>
        <img className="lg:w-[60%] h-[40%]" src="https://show.moxcreative.com/virtuware/wp-content/uploads/sites/39/2021/12/mac_mockup_1.png" alt="laptop"/>
    </div>
  )
}

export default TechnolgySection