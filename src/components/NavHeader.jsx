
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
	
	
<div className="flex flex-col1 justify-center items-center my-2" id="about">
	<div className="flex justify-center w-[50%] flex-col items-center mt-5">
		<img className=" w-[85%] h-100 object-cover  rounded-2xl border1 1bg-gray-200 shadow-xl shadow-gray-500/50 mt-2" src="https://piaggio-cv.co.in/wp-content/themes/piaggio/assets/img/product/passenger/auto-plus/Yellow_45454+Door.png"/>
			<p className="text-xl p-2 max-md:text-xl">Saravanasankar - sales executive</p>
			<img className="" src="https://img.icons8.com/fluency/32/instagram-new.png"/>
			</div>
			<div className="flex justify-arounded w-[50%] items-center w-full1 max-md:flex-col">
				<div className="w-full1 text-left">
					<p className="text-2xl p-2 max-md:text-xl">Perambalur, Ariyalur, Thuraiyur, and Tholudur</p>
					<p className="text-[35px] max-md:text-2xl p-2">Move Anywhere, More Easily Than Ever - Ape Auto</p>
					<div className="list-inside1 list-disc1 mb-6 flex flex-wrap">
						<div className="text-sm p-2 max-md:text-xl w-[50%]"> 15+ years of experience .</div>
						<div className="text-sm p-2 max-md:text-xl w-[50%]"> trusted service, .</div>
						<div className="text-sm p-2 max-md:text-xl w-[50%]">5000+ serve customers</div>
						<div className="text-sm p-2 max-md:text-xl w-[50%]">affordable pricing, and ongoing support!</div>
					</div>
					<a href="tel:9842829583" className="p-3  mt-6 text-blue-400 text-[16px]  bg-yellow-400  border-1 rounded-xl hover:bg-blue-100 uppercase"> Immediate Call</a>
				</div>
			</div>
		</div>

	</>
	
	
	)
	
}
export default NavHeader



