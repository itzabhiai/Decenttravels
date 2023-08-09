import { React, useEffect } from "react"

import Card from 'react-bootstrap/Card';
import "../Style/Pop.css"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { CiCircleCheck } from "react-icons/ci";

const PopPlace = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <div>
        <div className="Maincard">
            <Card style={{ width: '18rem' }} data-aos="fade-up">
                <Card.Img variant="top" src="https://res.cloudinary.com/dlbp05ldk/image/upload/v1688495134/Untitled_400_280_px_1280_853_px_zcuovs.png" />
                <Card.Body>
                    <Card.Title> <h3>Day 1: Cruise ride </h3></Card.Title>
                    <Card.Text>
                        <p><p1><CiCircleCheck /> Ahmedabad to Dubai Flight</p1>  <br />
                            <p1><CiCircleCheck /> 6:30 PM Polar Cruise Ride</p1>  <br /><p1><CiCircleCheck /> Two hour cruise ride in the  ocean</p1> <br /><p1><CiCircleCheck /> Soft drinks, international buffet</p1> <br /><p1><CiCircleCheck />Tanura dance </p1>

                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        </p>
                    </Card.Text>

                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} data-aos="fade-up">
                <Card.Img variant="top" src="https://res.cloudinary.com/dlbp05ldk/image/upload/v1688497843/Untitled_400_280_px_1280_853_px_1_sqmizi.png" />
                <Card.Body>
                    <Card.Title> <h3>DAY-2 : DUBAI CITY TOUR </h3></Card.Title>
                    <Card.Text>
                        <p><p1><CiCircleCheck /> Gold Souk - Dubai Creek
                        </p1>  <br />
                            <p1><CiCircleCheck /> Jumeirah Mosque - Burj Al Arab
                            </p1>  <br /><p1><CiCircleCheck /> Atlantic The Palm Hotel
                            </p1> <br /><p1><CiCircleCheck /> Passing the Zabeel Palace</p1> <br /><p1><CiCircleCheck />Atlantic The Palm - The Fountain Show.

                            </p1>
                            <br />
                            <p1><CiCircleCheck />La Mer Beach


                            </p1><br />
                            <p1><CiCircleCheck />Seven horses of gold


                            </p1><br />
                            <p1><CiCircleCheck />Marina Walk

                            </p1><br />
                            <p1><CiCircleCheck />Jumeirah Beach

                            </p1>

                        </p>
                    </Card.Text>

                </Card.Body>
            </Card >
            <Card style={{ width: '18rem' }} data-aos="fade-up">
                <Card.Img variant="top" src="https://res.cloudinary.com/dlbp05ldk/image/upload/v1688497807/Untitled_400_280_px_1280_853_px_3_jzbeny.png" />
                <Card.Body>
                    <Card.Title> <h3>DAY-3 : ABU DHABI CITY TOURS </h3></Card.Title>
                    <Card.Text>
                        <p><p1><CiCircleCheck /> Ferrari World (Stop Hour)
                        </p1>  <br />
                            <p1><CiCircleCheck /> Drive through Sadayat Island
                            </p1>  <br /><p1><CiCircleCheck />Khajoor Market (Stop Hour) - Heritage Village
                            </p1> <br /><p1><CiCircleCheck /> Marina Mall - Emirates Palace (Photo Stop)
                            </p1> <br /><p1><CiCircleCheck />President Palace (Drive By) - Sheikh Zayed
                        <br/>
                                Masjid </p1>

                        </p>
                    </Card.Text>

                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }} data-aos="fade-up">
                <Card.Img variant="top" src="https://res.cloudinary.com/dlbp05ldk/image/upload/v1688497786/Untitled_400_280_px_1280_853_px_4_ml4ube.png" />
                <Card.Body>
                    <Card.Title> <h3>DAY-4 : DESERT SAFARI
                    </h3></Card.Title>
                    <Card.Text>
                        <p><p1><CiCircleCheck /> Sunset photography

                        </p1>  <br />
                            <p1><CiCircleCheck /> 4 x 4 Dun Basing by SUV - Camel ride

                            </p1>  <br /><p1><CiCircleCheck />Belly Dance - Henna Painting - Arabic Coffee
(Gawah) and Fresh Dates - Traditional Dress
                            </p1> <br /><p1><CiCircleCheck /> Unlimited soft drinks - tea-coffee

                            </p1> <br /><p1><CiCircleCheck />International buffet dinner</p1>
                            <p1><CiCircleCheck />2 Fire Show &
Tanura dance</p1>

                        </p>
                    </Card.Text>

                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} data-aos="fade-up">
                <Card.Img variant="top" src="https://res.cloudinary.com/dlbp05ldk/image/upload/v1688325599/burj-khalifa-g09f9140c3_1280_hok1dr.jpg" />
                <Card.Body>
                    <Card.Title> <h3>DAY-5 : BURJ KHALIFA DUBAI MALL
                    </h3></Card.Title>
                    <Card.Text>
                        <p><p1><CiCircleCheck /> Dubai Marina - Dubai Frame (Photoshoot)


                        </p1>  <br />
                            <p1><CiCircleCheck /> Museum of the Future (Photoshop)


                            </p1>  <br /><p1><CiCircleCheck />Burj Khalifa (124 + 125th Floor Visit)

                            </p1> <br /><p1><CiCircleCheck />Visit Dubai Mall
 

                            </p1> <br /><p1><CiCircleCheck />Mina Bazar</p1>
                           
                        </p>
                    </Card.Text>

                </Card.Body>
            </Card>


            <Card style={{ width: '18rem' }} data-aos="fade-up">
                <Card.Img variant="top" src="https://res.cloudinary.com/dlbp05ldk/image/upload/v1688325599/steptodown.com455340_tpqp4n.jpg" />
                <Card.Body>
                    <Card.Title> <h3>DAY-6 : CHECK OUT </h3></Card.Title>
                    <Card.Text>
                        <p> <p1><CiCircleCheck />Checkout at 11:00 hrs</p1><br/>
                        <p1><CiCircleCheck />Rest of the time for shopping 
</p1><br/>
                        <p1><CiCircleCheck />In the evening leave for the airport
</p1><br/>

<br/>
<br/>
<br/>
<br/>
<br/>



                        </p>
                    </Card.Text>
                    
                </Card.Body>
            </Card>


        </div>
        <div className="popinclude1"> 

            <div className="popinclude" data-aos="fade-up"> 
                <h1>INCLUDES:</h1>
                <p1><CiCircleCheck />Ahmedabad to Ahmedabad Flights </p1>
                <p1><CiCircleCheck />5 nights and 6 days stay in 4 star hotel </p1>
                <p1><CiCircleCheck />5 breakfasts and 5 dinners
 </p1>
                <p1><CiCircleCheck />Canal Cruise </p1>
                <p1><CiCircleCheck />Desert Safari
 </p1>
                <p1><CiCircleCheck />Dubai City Tour Abu Dhabi City Tour</p1>
                <p1><CiCircleCheck />Burj Khalifa 124-125th floor visit</p1>
                <p1><CiCircleCheck />Floor Visit Visitor Visa with Insurance</p1>

            </div>
            <div className="popinclude" data-aos="fade-up"> 
                <h1>EXCLUDED:</h1>
                <p1><CiCircleCheck />Additional services </p1>
                <p1><CiCircleCheck />Food other than specified room services,</p1>
                <p1><CiCircleCheck />Hotel laundry and other personal expenses
 </p1>
                <p1><CiCircleCheck />Tickets cannot be canceled or refunded once booked</p1>
                <p1><CiCircleCheck />Immediate visa fee

 </p1>
                <p1><CiCircleCheck />This is not the final quote and the price may change slightly
under certain circumstances.
</p1>
                <p1><CiCircleCheck />Burj Khalifa 124-125th floor visit</p1>
                <p1><CiCircleCheck />In case of emergency, the final decision will be taken by Raj
Tour Management.</p1>

            </div>

            </div>
            </div>
    )
}
 
export default PopPlace