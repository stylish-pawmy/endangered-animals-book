import "../App.css";
import { default as GeoIndex } from "../assets/geo-index.svg";

export default function Card(props)
{
    
    return (
        <article className="card">
            <img src={props.img}/>
            <div className="card--body">
                <p className="card--location">
                    <img src={GeoIndex} /> {props.location}
                    <a href={props.locationLink}>View On Google Maps</a>
                    </p>
                <h3 className="card--title">{props.title}</h3>
                <p className="card--alt-name">{props.altNames}</p>
                <p className="card--description">{props.description}</p>
            </div>
        </article>
    );
}