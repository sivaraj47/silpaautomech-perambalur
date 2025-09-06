function TourCard({ img, titles, description, isFullWidth,url}) {
  return (
   /*  <div className="group flex w-78 flex-col justify-center mt-7 bg-sky-100 rounded-xl border-2 border-transparent hover:border-cclor hover:shadow-strong transition ease-in m-2">
      <img
        src={img}
        alt={titles}
        className="w-auto rounded-xl h-48 object-cover m-2 transform scale-99 group-hover:scale-101 group-hover:shadow-xl transition ease"
      />
      <div className="p-2 font-roboto text-center">
        <div className="text-accent font-semibold">{titles}</div>
        <p className="font-medium text-par">{description}</p>
      </div>
    </div> */
	<div className={`group flex flex-col justify-center mt-7 bg-sky-100 rounded-xl border-2 border-transparent hover:border-cclor hover:shadow-strong transition ease-in m-2 ${isFullWidth ? "w-full " : "w-78 max-md:w-full "}`} id="services">
	
	
	<img 	
	  src={img}
	  alt={titles}
	className={`rounded-xl  object-cover m-2 transform scale-99 group-hover:scale-105 group-hover:shadow-xl transition ease 
	${isFullWidth ? "h-96 bg-top" : " h-48 max-md:h-96"}`} />
	
      <div className="p-2 font-roboto text-center">
        <div   onClick={() => window.open(url, "_blank")}
		 className="text-accent font-semibold text-white bg-blue-600 text-[14px] p-2  w-48 m-auto border-1 rounded-xl mb-2">{titles}</div>
        <p className="font-normal text-[18px] text-par mb-2">{description}</p>
      </div>
	</div>
	
	
  )
}

export default TourCard
