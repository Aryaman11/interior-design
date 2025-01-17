import Footer from "../components/footer";
import Header from "../components/header";
import ListingBanner from "../components/listingBanner";

function Blog(){
    return (
        <div className="">
        
        <Header/>
        <ListingBanner link="./../../public/image/blog.png" info="Articles & News" />
        <div className="my-8 mx-40 flex items-center justify-center">
            <input className="px-8 py-4 w-1/2 bg-[#F4F0EC] rounded-3xl" placeholder="search">
                </input>
                <span className="-ml-12">
                 <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                <path d="M26.5881 24.2898L20.4826 18.1691C21.9525 16.2073 22.746 13.8195 22.7434 11.3659C22.7434 5.09879 17.6573 0 11.4059 0C5.1544 0 0.0683594 5.09879 0.0683594 11.3659C0.0683594 17.633 5.1544 22.7318 11.4059 22.7318C13.8533 22.7345 16.2352 21.939 18.192 20.4654L24.2975 26.5862C24.6065 26.8631 25.0096 27.011 25.424 26.9994C25.8384 26.9877 26.2326 26.8175 26.5257 26.5237C26.8188 26.2298 26.9886 25.8346 27.0002 25.4192C27.0118 25.0038 26.8643 24.5997 26.5881 24.2898ZM3.30765 11.3659C3.30765 9.76023 3.7826 8.1906 4.67244 6.85552C5.56229 5.52043 6.82705 4.47986 8.30681 3.86539C9.78657 3.25092 11.4148 3.09015 12.9857 3.4034C14.5566 3.71666 15.9996 4.48987 17.1322 5.62526C18.2647 6.76066 19.036 8.20724 19.3485 9.78208C19.6609 11.3569 19.5006 12.9893 18.8876 14.4727C18.2747 15.9562 17.2367 17.2241 15.905 18.1162C14.5732 19.0083 13.0075 19.4844 11.4059 19.4844C9.25887 19.4818 7.20056 18.6257 5.6824 17.1037C4.16425 15.5818 3.31022 13.5183 3.30765 11.3659Z" fill="#CDA274"/>
                </svg>
                </span>
        </div>
        <div className="text-3xl font-serif mx-40 text-[#292F36] leading-5 tracking-wide mt-16 mb-32">
            Latest Post
            <div className="flex mt-16">
             <img className="w-1/3 mr-12" src="./../../image/bolgimg.png" alt="image"/>
             <div className="leading-9 text-3xl">
                <p>Low Cost Latest Invented Interior Designing Ideas</p>
                <p className="text-lg text-[#4D5053] tracking-normal p-4">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.
                
                <br/> Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>
                <p className="text-[#4D5053] text-lg mt-8 pl-4 flex items-center justify-items-center">26 December,2022<span className="ml-72">
                    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                    <circle cx="26" cy="26" r="26" fill="#F4F0EC"/>
                    <path d="M23.772 32.6855L29.7148 25.9998L23.772 19.3141" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </span>
                    </p>
             </div>
            </div>
            
            
        </div>
        <div className="text-3xl font-serif mx-40 text-[#292F36] leading-5 tracking-wide mt-16 mb-44">
            Articles & News
            <div className="mt-12 flex justify-items-center items-center">
             <div className="w-1/3 p-4">
              <img className="" src="./../../public/image/blog-1.png"/>
              <p className="pr-4 text-lg font-semibold text-[#292F36] leading-5 mt-8 ">Let’s Get Solution For Building Construction Work</p>
              <p className="pt-4 text-[#4D5053] text-sm flex justify-items-center items-center">26 December,2022
              <span className="pl-24">
                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                <circle cx="26" cy="26" r="26" fill="#F4F0EC"/>
                <path d="M23.772 32.6855L29.7148 25.9998L23.772 19.3141" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
              </p>
             </div>
             <div className="w-1/3 p-4">
              <img className="" src="./../../public/image/blog-1.png"/>
              <p className="pr-4 text-lg font-semibold text-[#292F36] leading-5 mt-8 ">Let’s Get Solution For Building Construction Work</p>
              <p className="pt-4 text-[#4D5053] text-sm flex justify-items-center items-center">26 December,2022
              <span className="pl-24">
                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                <circle cx="26" cy="26" r="26" fill="#F4F0EC"/>
                <path d="M23.772 32.6855L29.7148 25.9998L23.772 19.3141" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
              </p>
             </div>
             <div className="w-1/3 p-4">
              <img className="" src="./../../public/image/blog-1.png"/>
              <p className="pr-4 text-lg font-semibold text-[#292F36] leading-5 mt-8 ">Let’s Get Solution For Building Construction Work</p>
              <p className="pt-4 text-[#4D5053] text-sm flex justify-items-center items-center">26 December,2022
              <span className="pl-24">
                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                <circle cx="26" cy="26" r="26" fill="#F4F0EC"/>
                <path d="M23.772 32.6855L29.7148 25.9998L23.772 19.3141" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
              </p>
             </div>
            </div>
            
        </div>
        <Footer/>
        </div>
    )
}
export default Blog;