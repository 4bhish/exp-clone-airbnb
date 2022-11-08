import React from "react";
import Picture from "./images/pics.svg"

export default function Hero()
{
    return(
        
        <section className="comp"> 
        <img src={Picture} alt="pics" className="hero--pics"  />
        <div className="hero--div">
        <h1 className="hero-heading">Online Experiences</h1>
        <p className="hero--desc">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
        </div>
        </section>
    )
}