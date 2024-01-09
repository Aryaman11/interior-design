import Footer from "../components/footer"
import Header from "../components/header"
import ListingBanner from "../components/listingBanner"

function Projects () {
     return(
        <div>
           <Header/> 
           <ListingBanner info={"Our Project"}/>
           <div className='flex mt-32 mb-44 mx-40'>
             <div className="flex mx-auto">
                <p className="text-2xl border-x-8 border-black rounded-md">Bedroom</p>
             </div>
           </div>
           <Footer/>
        </div>
     )
}
export default Projects