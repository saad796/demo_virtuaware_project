import ReviewCard from "./ReviewCard"


function ClientReviewSection() {
  return (
    <div className="client-review-container text-white py-32 text-center w-full">
        <small className=" text-base font-normal">Testimonial</small>
        <h4 className=" text-6xl font-bold md:w-[60%] m-auto my-5">Let Our Clients Speak for Themselves</h4>
        <p className=" text-base font-normal md:w-[65%] m-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        <div className="review-card-container flex gap-5 overflow-x-auto mt-10 px-3">
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
        </div>
    </div>
  )
}

export default ClientReviewSection