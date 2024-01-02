


function Banner (){
    return(
        <div className="relative" >
            <img className="z-0" src='./../../public/image/Bannerimage.jpg'/>
            <div className="absolute z-10 top-9 left-9" >
            <p className="text-4xl leading-tight font-normal text-white">Let's make your <br/> home beautiful together</p>
            <p className="text-white mt-2">There are many variations of the passages <br/> of lorem Ipsum fromavailable, majority.</p>
            
            <button className=" bg-[#CDA274] flex px-6 py-2 items-center rounded-xl mt-6">
                <p className="mr-2 text-white">Get Started</p>
                
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Vector" d="M1 8.43536L14.7232 8.29851M9.61818 1.91132L16.1412 8.4343L9.48677 15.0887" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                    </svg>                
               
            </button>
            </div>
            

        </div>
    )
}
export default Banner;