import Header from "../components/header";
import Banner from "../components/banner";
import Frameone from "../components/frameOne";
import Freetrail from "../components/freetrial";
import Aboutus from "../components/aboutUs";
import Framethree from "../components/framethree";
import Framefour from "../components/framefour";
import Frameseven from "../components/frameseven";
import Framefive from "../components/framefive";
import Cards from "../components/cards"
import Framesix from "../components/framesix";
import Wannajoin from "../components/wannaJoin";
import Footer from "../components/footer";

function Home (){
    return (
        <div>
          <Header/>
          <div className='mx-40 pt-8'>
            
            <Banner/>
            <Frameone info1='Project Plans' info2='Interior work' info3='Retail Design' color='text-black'/>
            <Freetrail/>
            <Aboutus/>
            <Framethree/>
            <Framefour info1='Follow Our Projects'/>
            <Frameseven/>
            <Framefive/>
            <Cards/>
            <Framesix/>
          </div>
            <Wannajoin/>
            <Footer />  
        </div>
    )
}
export default Home;