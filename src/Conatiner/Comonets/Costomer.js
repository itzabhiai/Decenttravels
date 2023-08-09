import React from 'react'
import {
    
    FaCalendarCheck,
    FaHandshakeAltSlash,
    FaUserFriends,
    FaHotel,
    
} from "react-icons/fa";
import "../Comonets/Costomer.css"
import CountUp from 'react-countup'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";
const Costomer = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <div>

            <div
                className="conatiner"

            >
                <div className="box" data-aos="fade-up">
                    <div className="FaUserGraduate">
                    <FaUserFriends />
                    </div>
                    <div className="count">
                        <h1>
                            <CountUp end={4500} duration={5} />+
                        </h1>
                        <p>Happy Customer</p>
                    </div>
                </div>
                <div className="box" data-aos="fade-up">
                    <div className="FaUserGraduate">
                        <FaCalendarCheck />
                    </div>
                    <div className="count">
                        <h1>
                            <CountUp end={4500} duration={5} />+
                        </h1>
                        <p>Tour Completed</p>
                    </div>
                </div>
                <div className="box" data-aos="fade-up">
                    <div className="FaUserGraduate">
                        <FaHandshakeAltSlash />
                    </div>
                    <div className="count">
                        <h1>
                            <CountUp end={1500} duration={5} />
                        </h1>
                        <p>Partners</p>
                    </div>
                </div>
                <div className="box" data-aos="fade-up">
                    <div className="FaUserGraduate">
                        <FaHotel />
                    </div>
                    <div className="count">
                        <h1>
                            <CountUp end={500} duration={5} />+
                        </h1>
                        <p>Hotels</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Costomer