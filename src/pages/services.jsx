import Footer from "../components/footer";
import Frameone from "../components/frameOne";
import Framefour from "../components/framefour";
import Header from "../components/header";
import ListingBanner from "../components/listingBanner";
import Servicescomp from "../components/servicescomp";
import Wannajoin from "../components/wannaJoin";

function Services(){
      return(
         <div>
            <Header/>
            <ListingBanner info={"Services"} link={'./../../image/Rectangle20.png'}/>
            <div className='mx-40 pt-8 pb-8'>
             <Frameone info1='Project Plans' info2='Interior work' info3='Retail Design' color='text-black'/>
             <Frameone info1='2d/3d Art Work' info2='Interior work' info3='Decoration Work' color='text-amber-600'/>
             <Framefour info1='How We Work'/>
            </div>
            <Servicescomp/>
            <Wannajoin/>
            <Footer/>
         </div>
      )
}
export default Services;