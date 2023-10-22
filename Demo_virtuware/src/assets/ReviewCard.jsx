

function ReviewCard() {
  return (
    <div className="review-card md:min-w-[32%] min-w-[95vw] text-black py-16 px-6 rounded-lg">
        <img className=" rounded-full w-28 m-auto" src="https://show.moxcreative.com/virtuware/wp-content/uploads/sites/39/2021/12/close-up-portrait-of-attractive-plus-size-young-woman.jpg" alt="profile" />
        <h4 className="text-2xl font-semibold pt-4">Nataila Joane</h4>
        <small className="text-sky-700 font-semibold">Bussiness manager</small>
        <ul className="flex w-fit m-auto pt-4">
            <li className=" text-yellow-500 text-2xl">&#x2605;</li>
            <li className=" text-yellow-500 text-2xl">&#x2605;</li>
            <li className=" text-yellow-500 text-2xl">&#x2605;</li>
            <li className=" text-yellow-500 text-2xl">&#x2605;</li>
            <li className=" text-yellow-500 text-2xl">&#x2605;</li>
        </ul>
        <p className=" text-slate-700 pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores impedit voluptatem voluptates eum obcaecati unde quasi quas eius reprehenderit voluptate.</p>
    </div>
  )
}

export default ReviewCard