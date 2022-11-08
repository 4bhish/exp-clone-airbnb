import React from "react";
import Star from "./images/star.svg"

export default function Card(props)
{
  var badge;
  if(props.item.openSpots === 0 )
  {
    badge="SOLD";
  } else
  {
    badge="ONLINE";
  }
    return(
        
            <div className="card">
              <div className="badge">{badge}</div>
          <img alt="katie" className="katie" src={props.item.img} />
          <div className="stats">
            <img alt="star" className="card--star" src={Star} />
            <span>{props.item.ratings}</span>
            <span className="gray">{props.item.ratingsAll}</span>
            <span className="gray">• {props.item.country}</span>
          </div>
          <p className="card--title">{props.item.desc}</p>
          <p><span className="bold">from ${props.item.initialVal}</span> / person</p>
        </div>
        
    )
}