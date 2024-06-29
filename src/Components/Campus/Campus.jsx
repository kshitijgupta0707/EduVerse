import './Campus.css'
import { assets } from '../../assets/index'
import {Photos} from '../index'
import { useNavBarContext } from '../../Context/NavBarContextProvider'

const Campus = () => {
    const {setGallery} = useNavBarContext();
    return (
        <>
            <div className="campus">
                <div className='gallery slideFromLeft' >
                    <img id='gal1' className='scaleImage' src={assets.college1} alt="" />
                    <img id='gal2' className='scaleImage' src={assets.college2} alt="" />
                    <img id='gal3' className='scaleImage' src={assets.college10} alt="" />
                    <img id='gal4' className='scaleImage' src={assets.college9} alt="" />
                </div>
                <button onClick={() => { setGallery(true) }} className='btn dark-btn' >See More here <img src={assets.whiteArrow} alt="" />  </button>
            </div>
            <Photos/>
        </>

    )
}

export default Campus