
import { useState } from "react";

function NavHeader({mtitle,stitle,stitle2,stitle3,smtit,profile,insta}) {
	
	const [activePage, setActivePage] = useState(""); 
	
	return(	
	<>
	<nav className="w-[600px] m-auto flex flex-wrap justify-around shadow-xl items-center bg-yellow-400 shadow p-3 rounded-4xl sticky top-0 z-20 max-md:flex max-md:flex-col max-md:justify-center max-md:w-[100%]">
	<a href="">Me
	
	</a>
	<ul className="flex flex-wrap justify-around w-[300px] max-md:flex max-md:flex-col max-md:w-full max-md:justify-center">
	
		<li>
			<a href="#about" className="text-[#222222]">
			About
			</a>
		</li>
		<li>
			<a href="#services" className="text-[#222222]">
			Services
			</a>
		</li>
			<li>
			<a href="" className="text-[#222222]">
			Contact
			</a>
		</li>
	</ul>
	
	</nav>
	
	
	<div className="flex flex-col justify-center items-center my-2" id="about">
	     <div className="flex justify-center flex-col items-center mt-5">
		 <img src={profile} className=" w-40 h-40 object-cover  rounded-full border bg-gray-200 shadow-xl shadow-gray-500/50 mt-2"/>
		 <p className="text-xl p-2 max-md:text-xl">{stitle}</p>
          <img onClick={() => window.open(insta, "_blank")} src="https://img.icons8.com/fluency/32/instagram-new.png" className=""/>
      			 </div>
	  <p className="text-[35px] max-md:text-2xl p-2">{mtitle}</p>	
				 <p className="text-2xl p-2 max-md:text-xl">{stitle3}</p>	
<div className="flex justify-arounded items-center w-full max-md:flex-col">
<div className="w-full text-left">
<ul className="list-inside list-disc">
  <li className="text-sm p-2 max-md:text-xl">With 15+ years of experience in the automobile industry, I specialize in providing reliable and efficient Ape Auto solutions for personal and commercial needs.</li>
  <li className="text-sm p-2 max-md:text-xl">My goal is to ensure every customer enjoys a smooth buying experience, with trusted service, affordable pricing, and ongoing support.</li>
</ul>
</div>	
<div className=" w-full text-left">
<ul className="list-inside  list-disc">
  <li className="text-sm p-2 max-md:text-xl">I proudly serve customers across Perambalur, Ariyalur, Thuraiyur, and Tholudur, offering expert guidance to help you choose the perfect vehicle for your business or transportation requirements.</li>
  <li className="text-sm p-2 max-md:text-xl">Let’s make your journey easier with Ape Auto – your partner for progress!</li>
</ul>
</div>				 
</div>				 
	  	  

	<a href="tel:9876543210" className="p-3  mt-2 text-blue-400 text-[16px]  bg-yellow-400  border-1 rounded-4xl hover:bg-blue-100" >{smtit}</a>
	  
	</div>

	</>
	
	
	)
	
}
export default NavHeader