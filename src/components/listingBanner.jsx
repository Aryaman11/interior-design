function ListingBanner (props){

    return(
        <div className="relative mx-40">
           <img src ="./../../image/pricingBanner.png" alt=""/>
           <p className="text-white absolute font-serif text-3xl top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">{props.info}</p>
        </div>
    )
}
export default ListingBanner ;