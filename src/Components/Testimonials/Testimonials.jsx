import React, { useRef } from 'react'
import './Testimonials.css'
import { assets } from '../../assets/index'
const Testimonials = () => {
    //we are making slider here where you can 

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx = tx - 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;


    }
    const slideBackward = () => {
        if (tx < 0) {
            tx = tx + 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }



    return (
        <div className='testimonials fadeIn' >
            <img onClick={slideForward} src={assets.next} className='next-btn' alt="" />
            <img onClick={slideBackward} src={assets.back} className='back-btn' alt="" />






            <div className='slider' >
                <ul ref={slider} >
                    <li>

                        <div className='slide shadowAnimations ' >
                            <div className='user-info' >
                                <img src={assets.user1} alt="" />
                                <div>
                                    <h3>Kshitij Gupta</h3>
                                    <span>Gurgaon , India</span>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my Computer science degree at Edusity was one of the best decisions I've have ever mae.
                                The supporting environment , state-of-the-art facilities ,
                                and commitement to academic excellence have truly exceeded my expectations
                            </p>


                        </div>

                    </li>
                    <li>

                        <div className='slide shadowAnimations ' >
                            <div className='user-info' >
                                <img src={assets.user2} alt="" />
                                <div>
                                    <h3>Siddhant Gupta</h3>
                                    <span>Noida , India</span>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my Computer science degree at Edusity was one of the best decisions I've have ever mae.
                                The supporting environment , state-of-the-art facilities ,
                                and commitement to academic excellence have truly exceeded my expectations
                            </p>


                        </div>

                    </li>
                    <li>

                        <div className='slide shadowAnimations ' >
                            <div className='user-info' >
                                <img src={assets.user3} alt="" />
                                <div>
                                    <h3>Nandini Jindal</h3>
                                    <span>Patiala , India</span>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my Computer science degree at Edusity was one of the best decisions I've have ever mae.
                                The supporting environment , state-of-the-art facilities ,
                                and commitement to academic excellence have truly exceeded my expectations
                            </p>


                        </div>

                    </li>
                    <li>

                        <div className='slide shadowAnimations ' >
                            <div className='user-info' >
                                <img src={assets.user4} alt="" />
                                <div>
                                    <h3>Kartik Aggarwal</h3>
                                    <span> UP, India</span>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my Computer science degree at Edusity was one of the best decisions I've have ever mae.
                                The supporting environment , state-of-the-art facilities ,
                                and commitement to academic excellence have truly exceeded my expectations
                            </p>


                        </div>

                    </li>
                </ul>


            </div>



        </div>
    )
}

export default Testimonials