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
        <div className="flex mb-32">
        <div className="justify-items-center">
         <div className="mx-32 mt-48">
             <div className="">
                <p className="text-black mx-2 font-medium text-lg"> Client <span className="text-[#4D5053] px-32">Ankit Kumar</span></p>
                <p className="text-black mx-2 font-medium text-lg"> Category <span className="text-[#4D5053] px-[131px]">VIP</span></p>
                <p className="text-black mx-2 font-medium text-lg"> Type <span className="text-[#4D5053] px-36">VIP Home</span></p>
                <p className="text-black mx-2 font-medium text-lg"> Date <span className="text-[#4D5053] px-[108px]">Date 23,02, 2022</span></p>
                <p className="text-black mx-2 font-medium text-lg"> Link <span className="text-[#4D5053] px-32">https://dhome.com</span></p>
             </div>
                   
        </div>
         </div>
         <div className="justify-items-center">
              <div className="items-center pt-32 text-4xl">
               Minimal Look Bedrooms
               </div>
               <div className="text-[#4D5053] font-normal pt-4 leading-7 pr-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.<br/> In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.
               </div>
         </div> 
        </div>
        <div className="mx-40 mb-32 relative ">
         <img className="" src="./../../public/image/detailLow.png" alt=""/>
         <div className="absolute left-1/2 top-36 transform -translate-x-1/2 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="172" height="172" viewBox="0 0 172 172" fill="none">
            <g filter="url(#filter0_d_31_327)">
            <circle cx="86" cy="76" r="66" fill="white"/>
            <path d="M103.433 89.2216L95.0452 81.9667C97.0646 79.6415 98.1547 76.8112 98.151 73.903C98.151 66.4747 91.1638 60.4312 82.5755 60.4312C73.9872 60.4312 67 66.4747 67 73.903C67 81.3314 73.9872 87.3749 82.5755 87.3749C85.9378 87.3781 89.21 86.4352 91.8984 84.6885L100.286 91.9434C100.711 92.2717 101.264 92.4469 101.834 92.4331C102.403 92.4193 102.945 92.2176 103.347 91.8693C103.75 91.521 103.983 91.0526 103.999 90.5602C104.015 90.0678 103.812 89.5888 103.433 89.2216ZM71.4501 73.903C71.4501 71.9998 72.1026 70.1394 73.3251 68.5569C74.5476 66.9744 76.2851 65.7411 78.318 65.0127C80.3509 64.2844 82.5879 64.0939 84.746 64.4652C86.9041 64.8365 88.8864 65.7529 90.4423 67.0987C91.9983 68.4445 93.0578 70.1591 93.4871 72.0257C93.9164 73.8923 93.6961 75.8272 92.854 77.5855C92.012 79.3438 90.586 80.8467 88.7564 81.9041C86.9269 82.9614 84.7759 83.5258 82.5755 83.5258C79.626 83.5227 76.7982 82.5079 74.7126 80.704C72.627 78.9 71.4537 76.4542 71.4501 73.903Z" fill="#CDA274"/>
            </g>
            <defs>
            <filter id="filter0_d_31_327" x="0" y="0" width="172" height="172" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="10"/>
            <feGaussianBlur stdDeviation="10"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.752941 0 0 0 0 0.752941 0 0 0 0 0.752941 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_31_327"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_31_327" result="shape"/>
            </filter>
            </defs>
            </svg>
         </div>
        </div>
        <Footer/>
        </div>
    )
}

export default ProjectDetail;