import Footer from "../components/footer";
import Header from "../components/header";

function Error404 (){
    return ( 
        <div>
            <Header/>
            <div className="mx-40 mt-8">
                <div className="py-16 w-1/2">
                  <img src="./../../image/404.png" alt=""/>
                </div>
                <div className="pl-[450px] mb-[100px] -mt-48">
                  <p className="text-[#CDA274] text-9xl font-bold font-serif">404</p>
                  <p className="text-[$292F36] text-2xl w-3/4 mt-8 font-serif leading-12">We are sorry, but the page you requested was not found...</p>
                  <a href="/" alt="Home">
                  <div className="w-44 bg-black p-3 mt-4 text-white rounded-xl flex justify-center items-center">Back To Home
                    <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                    <path d="M1 8.43536L14.7232 8.29851M9.61818 1.91132L16.1412 8.4343L9.48677 15.0887" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  </a>
                  <div></div>
                </div>
             
            </div>
            <Footer/>
        </div>
    )
}
export default Error404;