import Aboutus from "../components/aboutUs";
import Footer from "../components/footer";
import Header from "../components/header";
import ListingBanner from "../components/listingBanner";

function AboutUs (){
    return (
        <div>
            <Header/>
            <ListingBanner link="./../../public/image/aboutus.png" info="About Us" />
            <div className="mx-40 my-32">
                <div className="flex justify-center text-[#292F36] font-serif text-2xl">
                   <p className="text-center w-1/2">I like an interior that defies labeling. I don't really want someone to walk into a room and know that I did it</p>
                </div>
                <div className="flex my-16 text-[#292F36] font-serif">
                    <div className="w-1/2 mt-24">
                        <p className="mr-2 text-3xl font-medium">What We Do</p>
                        <p className="m-2 py-4 pr-8">It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.</p>
                        <div className="bg-[#292F36] text-white flex justify-center items-center w-40 rounded-3xl p-4">Our Concept
                        <svg className="ml-1" xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                        <path d="M1 8.4353L14.7232 8.29845M9.61818 1.91125L16.1412 8.43424L9.48677 15.0886" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                        </svg>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <img src="./../../public/image/about-1.png" alt="image"/> </div>
                </div>
                <div className="flex my-24 text-[#292F36] font-serif">

                    <div className="w-1/2">
                        <img src="./../../public/image/about-1.png" alt="image"/> 
                    </div>
                    <div className="w-1/2 mt-24 pl-16">
                        <p className="text-3xl font-medium">What We Do</p>
                        <p className="m-2 py-4">It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.</p>
                        <div className="bg-[#292F36] text-white flex justify-center items-center w-40 rounded-3xl p-4 ">Our Concept
                        <svg className="ml-1" xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                        <path d="M1 8.4353L14.7232 8.29845M9.61818 1.91125L16.1412 8.43424L9.48677 15.0886" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                        </svg>
                        </div>
                    </div>
                    
                </div>
                <Aboutus/>
                <div className="my-24 flex justify-center text-3xl font-serif">
                    <p className="w-1/2 text-center text-[#292F36]">Creative project? Let's have a productive talk.</p>
                </div>
                <div className="my-8 flex justify-center">
                        <input className="w-64 placeholder-slate-400 focus:outline-none border-solid border-b-2 border-black mx-8 p-2" placeholder="Name"/>
                        <input className="w-64 placeholder-slate-400 focus:outline-none border-solid border-b-2 border-black mx-8 p-2" placeholder="Email"/>
                    </div>
                        <input className="w-[581px] placeholder-slate-400 focus:outline-none border-solid border-b-2 border-black mx-56 p-2" placeholder="Message"/>
                    <div className="mt-16 w-36 rounded-3xl bg-black text-white p-4 flex items-center text-center font-serif mx-auto">
                    Send Now
                        <svg className="ml-2 " xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                        <path d="M1.85938 8.4353L15.5826 8.29845M10.4776 1.91125L17.0005 8.43424L10.3461 15.0886" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                        </svg>
                    </div>
            </div>
            <Footer/>
        </div>
    )
}
export default AboutUs;