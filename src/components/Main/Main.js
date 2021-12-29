import React, {useState,useEffect} from "react";


import './Main.css';


const Main = () => {


   

    return(
        <div className='Main'>
                <ul className="component-ul">
                    <li className="component-li">
                        <h4>Betta Fish</h4>               
                        <p>
                        Betta fish are native to Asia, where they live in the shallow water of marshes, ponds, or slow-moving streams.
                        Male bettas are devoted fathers who build bubble nests for their young with their mouths and fiercely protect their babies from predators. 
                        Just like us, betta fish are diurnal. That means they’re active during the day and sleep at night, requiring darkness to get a good night’s rest.
                        While some bettas are captured in the wild, the vast majority of those sold in the U.S. come from breeding farms in Thailand and other countries in 
                        Southeast Asia, where it’s common practice to keep them in small bottles. 
                        When it’s time to pack them for transport to the U.S., fish are haphazardly dumped into baskets 
                        covered with nets and scooped up into small plastic cups.
                        </p>         
                    </li>
                    <li className="component-li">
                        <h4>title2</h4>
                        <p>Lorem ipsum</p>
                    </li>
                </ul>
        </div>
    )
}

export default Main;