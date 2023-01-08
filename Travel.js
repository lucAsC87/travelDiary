import React from "react"

export default function Travel(props) {
    return (
        <div className="container">
         <img src={props.travel.imageUrl}/>
         <div className="card">
         <p className="location">
         <img src="https://icons.download/icons/medium/outline/round/navigation/map-pin.svg"/>{props.travel.location.toUpperCase()}
         <a href={props.travel.googleMapsUrl}>View on Google Maps</a>
         </p>
         <h1 className="title">{props.travel.title}</h1>
         <p className="dates">{props.travel.startDate} - {props.travel.endDate}</p>
         <p className="description">{props.travel.description}</p>
         </div>
        </div>
    )
}