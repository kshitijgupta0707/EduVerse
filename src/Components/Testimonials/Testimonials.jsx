import React, { useEffect, useRef, useState } from 'react'
import './Testimonials.css'
import { assets } from '../../assets/index'
const Testimonials = () => {
    //we are making slider here where you can 

    const slider = useRef();
    let tx = 0;
    // useEffect(() => {
    //     if (tx == -50) {
    //         setDisableForward(true);
    //         console.log("forward disable");
    //     }
    //     else if (tx == 0) {
    //         setDisableBackward(true);
    //         console.log("BACKward disable");
    //     }
    //     else {
            
    //         console.log("DDFDFDFD");
    //         setDisableBackward(false);
    //         setDisableForward(false);
    //     }
    // }, [tx])

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
    const [disableBackward, setDisableBackward] = useState(false);
    const [disableForward, setDisableForward] = useState(false);



    return (
        <div className='testimonials fadeIn' >
            <img onClick={slideForward} src={assets.next} className={` ${disableForward ? 'disable' : ""}    next-btn`} alt="" />
            <img onClick={slideBackward} src={assets.back} className={` ${disableBackward ? 'disable' : ""}    back-btn`} alt="" />






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
                                This college offers excellent academic programs and dedicated professors who truly care about student success. . I've had numerous opportunities for hands-on learning and internships that have prepared me well for my career. Highly recommend!
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
                                Choosing to pursue my Computer science degree at JIIT was one of the best decisions I've have ever mae.
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
                                Amazing college experience with a supportive environment and diverse student body. The professors are knowledgeable and approachable, and the campus life is always buzzing with activities and events.
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
                                The college provides a perfect blend of rigorous academics and extracurricular opportunities. The faculty is exceptional, always encouraging us to think critically and innovate. The career services are outstanding, helping students secure internships and jobs
                            </p>


                        </div>

                    </li>
                </ul>


            </div>



        </div>
    )
}

export default Testimonials