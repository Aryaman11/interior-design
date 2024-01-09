import Footer from "../components/footer";
import Header from "../components/header";

function ProjectDetail (){
    return (
        <div>
        <Header/>
         <div className="relative">
         <img src='./../../image/bannerDetail.png' alt=""/>
         <p className="absolute text-white font-semibold text-4xl font-serif top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Project Details</p>
        </div>
        <div>
         <div className="mx-40 my-24 flex">
            <div>
             <div className="">
                <p> Client <span>Ankit Kumar</span></p>
                <p> Client <span>Ankit Kumar</span></p>
                <p> Client <span>Ankit Kumar</span></p>
                <p> Client <span>Ankit Kumar</span></p>
             </div>
            </div>
            <div>
              <div className="justify-items-center">
               
               </div>
            </div>         
        </div>
        </div>
        <Footer/>
        </div>
    )
}

export default ProjectDetail;