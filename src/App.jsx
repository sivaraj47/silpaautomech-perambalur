import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TourCard from "./components/TourCard"
import NavHeader from "./components/NavHeader"
import Footer from "./components/Footer"

function App() {

const main="Move Anywhere, More Easily Than Ever - Ape Auto";
const sub="Saravanasankar - sales executive";
const sub3="Perambalur, Ariyalur, Thuraiyur, and Tholudur";
const sub2=" With 15+ years of experience in the automobile industry, I specialize in providing reliable and efficient Ape Auto solutions for personal and commercial needs.I proudly serve customers across Perambalur, Ariyalur, Thuraiyur, and Tholudur, offering expert guidance to help you choose the perfect vehicle for your business or transportation requirements.My goal is to ensure every customer enjoys a smooth buying experience, with trusted service, affordable pricing, and ongoing support. Let’s make your journey easier with Ape Auto – your partner for progress! ";

const bc=" Call:+91 98765 43210"
const prof="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"

const instaurl="https://piaggio-cv.co.in/"

const tours = [
    {
      img: "https://piaggio-cv.co.in/wp-content/themes/piaggio/assets/img/product/passenger/auto-plus/Yellow_45454+Door.png",
      title: "Download Broucher",
      description: "Piaggio Apé Auto DX CNG",
	  url:"https://piaggio-cv.co.in/wp-content/themes/piaggio/assets/pdf/Ap%C3%A9_Auto_DX_CNG/Ape%20auto%20DX%20230%20cc_Tamil.pdf"
    },
    {
      img: "https://piaggio-cv.co.in/wp-content/themes/piaggio/assets/img/product/passenger/auto-classic/ApeClassicAuto.png",
      title: "Download Broucher",
      description: "Piaggio Apé Auto Classic Diesel",
	  url:"https://piaggio-cv.co.in/wp-content/themes/piaggio/assets/pdf/Ap%C3%A9_Auto_Classic_Diesel/Classic%20Broucher%20Tamil.pdf"
    },
    {
     img: "https://piaggio-cv.co.in/wp-content/themes/piaggio/assets/img/product/cargo/classic/_APL9701.png",
      title: "Download Broucher",
      description: "Piaggio Apé Xtra Classic Diesel",
	  url:"https://piaggio-cv.co.in/wp-content/themes/piaggio/assets/pdf/Ap%C3%A9_Xtra_Classic/Classic-Cargo-Brochure_Tamil.pdf"
    },
    {
      img: "https://piaggio-cv.co.in/wp-content/themes/piaggio/assets/img/product/passenger/nxt-plus/472613.png",
      title: "Download Broucher",
      description: "Piaggio Apé Auto DX CNG",
	  url:"https://piaggio-cv.co.in/wp-content/themes/piaggio/assets/pdf/Ap%C3%A9%20NXT+CNG/NXT%20+%20Brochure_Tamil.pdf"
    },
    {
     img: "https://piaggio-cv.co.in/wp-content/themes/piaggio/assets/img/product/electric/CARGO.png",
      title: "Download Broucher",
      description: "Piaggio Apé E-Xtra FX Max Three-wheeler Electric",
	  url:"https://piaggio-cv.co.in/wp-content/themes/piaggio/assets/pdf/Ap%C3%A9%20Electric%20Cargo%20Swappable%20Battery/Ape%20e-cargo%20MAX_Tamil%208%20%20pager_revised.pdf"
    },
    {
     img: "https://piaggio-cv.co.in/wp-content/themes/piaggio/assets/img/product/cargo/ht-cng-300cc/ht-cng-yellow8.png",
      title: "Download Broucher",
      description: "Piaggio Apé Xtra HT 300cc CNG",
	  url:"https://piaggio-cv.co.in/wp-content/themes/piaggio/assets/pdf/Ap%C3%A9_Xtra_HT_300CNG/300_CC_Xtra-HT_Leaflet_Tamil.pdf"
    },
    {
      img: "https://piaggio-cv.co.in/wp-content/themes/piaggio/assets/img/product/passenger/auto-plus/Yellow_45454+Door.png",
      title: "Download Broucher",
      description: "Piaggio Apé Auto DX CNG",
	  url:"https://piaggio-cv.co.in/wp-content/themes/piaggio/assets/pdf/Ap%C3%A9_Auto_DX_CNG/Ape%20auto%20DX%20230%20cc_Tamil.pdf"
    },
    {
      img: "https://piaggio-cv.co.in/wp-content/themes/piaggio/assets/img/product/passenger/auto-plus/Yellow_45454+Door.png",
      title: "Download Broucher",
      description: "Piaggio Apé Auto DX CNG",
	  url:"https://piaggio-cv.co.in/wp-content/themes/piaggio/assets/pdf/Ap%C3%A9_Auto_DX_CNG/Ape%20auto%20DX%20230%20cc_Tamil.pdf"
    },
    {
     img: "https://piaggio-cv.co.in/wp-content/themes/piaggio/assets/img/product/passenger/auto-plus/Yellow_45454+Door.png",
      title: "Download Broucher",
      description: "Piaggio Apé Auto DX CNG",
	  url:"https://piaggio-cv.co.in/wp-content/themes/piaggio/assets/pdf/Ap%C3%A9_Auto_DX_CNG/Ape%20auto%20DX%20230%20cc_Tamil.pdf"
    }
	
  ]
  return (
    <>   
    	<NavHeader mtitle={main} stitle={sub} stitle2={sub2} stitle3={sub3} smtit={bc} profile={prof} insta={instaurl}    />
		
	  <div className="flex justify-center flex-wrap">
	  { tours.map((tour , index)=> (
	    <TourCard 
		
		key={index}
		img={tour.img}
		titles={tour.title}
		url={tour.url}
		description={tour.description}
		
        isFullWidth={index ===0}

		/>
	
	  ))  
	  }
    </div>
		<Footer/>
    </>
	
  )
}

export default App
