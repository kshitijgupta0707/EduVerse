import React, { useState } from 'react'
import './Photos.css'
import { assets } from '../../assets/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircleChevronLeft,
    faCircleChevronRight,
    faCircleXmark
} from '@fortawesome/free-solid-svg-icons'
import { RiNextjsFill } from 'react-icons/ri';
import { useNavBarContext } from '../../Context/NavBarContextProvider';
import { RiCloseLine } from "react-icons/ri";
const Photos = () => {

    const { gallery, setGallery } = useNavBarContext();
    const galleryImages = [
        { img: assets.college3 },
        { img: assets.college11 },
        { img: assets.college8 },
        { img: assets.college10 },
        { img: assets.college4 },
        { img: assets.college5 },
        { img: assets.college1 },
        { img: assets.college2 },
        { img: assets.college6 },
        { img: assets.college3 },
        { img: assets.college9 },
        { img: assets.gallery1 },


    ]

    const [slideNumber, setSlideNumber] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = (index) => {
        setSlideNumber(index)
        setOpenModal(true);
    }

    const prevSlide = () => {

        slideNumber === 0 ? setSlideNumber(galleryImages.length - 1) : setSlideNumber(slideNumber - 1);
    }
    const nextSlide = () => {
        slideNumber === galleryImages.length - 1 ? setSlideNumber(0) : setSlideNumber(slideNumber + 1);
    }

    return (
        <div className={`gallery-container ${gallery ? 'flex' : 'none'} `}>

            <div className=' gallery-wrapper' >
                {openModal && <div className='sliderWrap' >
                    <FontAwesomeIcon icon={faCircleChevronLeft} className=' gallery-buttons btnPrev' onClick={prevSlide} />
                    <FontAwesomeIcon icon={faCircleChevronRight} className=' gallery-buttons btnNext' onClick={nextSlide} />

                    <div className="fullScreenImage">
                        <img src={galleryImages[slideNumber].img} alt="" />
                    </div>



                </div>

                }
                <FontAwesomeIcon onClick={() => { setGallery(false); setOpenModal(false); }} className='close-gallery' icon={faCircleXmark} />

                <div className="galleryWrap">

                    {
                        galleryImages && galleryImages.map((slide, index) => {
                            return (
                                <div className="single" key={index} onClick={() => { handleOpenModal(index) }} >

                                    <img src={slide.img} alt="" />

                                </div>
                            )
                        })

                    }
                </div>



            </div>

        </div>

    )
}

export default Photos