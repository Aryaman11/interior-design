import Footer from "../components/footer";
import Header from "../components/header";
import ListingBanner from "../components/listingBanner";
function Pricing(){
    return (
       <>
        <div className="">
            <Header/>
            <ListingBanner info={"Pricing & Plan"}/>
            <div className='flex mt-32 mb-44 mx-40'>
              <div className="w-1/3 font-serif text-xl text-center">
                <p className="">Design advices</p>
                <p className="text-7xl mt-7 mb-4">$29</p>
                <p className="mb-16">/month</p>
                <p className="px-12 text-[#4D5053] leading-loose">General living space advices Rennovation advices Interior design advices Furniture reorganization Up to 5 hours meetings</p>
                <div className="mt-6 bg-[#292F36] flex mx-24 p-3 rounded-xl">
                    <p className="text-white justify-items-center">Get Started</p>
                    
                        <svg className="self-center ml-2" xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                        <path d="M1.42969 8.43536L15.1529 8.29851M10.0479 1.91132L16.5708 8.4343L9.91646 15.0887" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                        </svg>
                    
                </div>
              </div>
              <div className="w-1/3 font-serif text-xl text-center">
                <p className="">Complete interior</p>
                <p className="text-7xl mt-7 mb-4 text-[#CDA274]">$39</p>
                <p className="mb-4">/month</p>
                <div className="bg-[#CDA274] mx-16 rounded-xl mb-5">Most Popular Plans</div>
                <p className="px-12 text-[#4D5053] leading-loose">Complete home redesign Interior and exterior works Modular interior planning Kitchen design Garages organization</p>
                <div className="mt-16 bg-[#CDA274] flex mx-24 p-3 rounded-xl">
                    <p className="text-white justify-items-center">Get Started</p>
                    
                        <svg className="self-center ml-2" xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                        <path d="M1.42969 8.43536L15.1529 8.29851M10.0479 1.91132L16.5708 8.4343L9.91646 15.0887" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                        </svg>
                    
                </div>
              </div>
              <div className="w-1/3 font-serif text-xl text-center">
                <p className="">Furniture design</p>
                <p className="text-7xl mt-7 mb-4">$59</p>
                <p className="mb-16">/month</p>
                <p className="px-12 text-[#4D5053] leading-loose pb-2">Furniture for living room Furniture refurbishment Sofas and amchairs Tables and chairs Kitchens</p>
                <div className="mt-24 bg-[#292F36] flex mx-24 p-3 rounded-xl ">
                    <p className="text-white justify-items-center">Get Started</p>
                    
                        <svg className="self-center ml-2" xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                        <path d="M1.42969 8.43536L15.1529 8.29851M10.0479 1.91132L16.5708 8.4343L9.91646 15.0887" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                        </svg>
                    
                </div>
              </div>
            </div>
            
        </div>
        <Footer/>
        </>
        
    )
}
export default Pricing;