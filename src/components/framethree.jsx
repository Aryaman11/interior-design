import Vector from './../../public/image/Vector.png'
import Vector2 from './../../public/image/big.png'
import Vector3 from './../../public/image/eon.png'
import Vector4 from './../../public/image/Frame.png'

function Framethree (){
    const images = [Vector, Vector2, Vector3, Vector4];
    return(
        <div className="inline-flex mt-24">
            {
                images.map((item, i) => {
                    return(
                        <div key={i} className="p-12">
                            <img src={item}/>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Framethree;