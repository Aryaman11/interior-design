import Footer from "../components/footer";
import Frameone from "../components/frameOne";
import Header from "../components/header";
import ListingBanner from "../components/listingBanner";

function Services(){
      return(
         <div>
            <Header/>
            <ListingBanner info={"Services"} link={'./../../image/Rectangle20.png'}/>
            <div className='mx-40 pt-8'>
             <Frameone/>
            </div>
            <Footer/>
         </div>
      )
}
export default Services;