import "../App.css";
import { default as TigerImg } from "../assets/white-tiger.jpg";
import { default as GeoIndex } from "../assets/geo-index.svg";

export default function Card()
{
    
    return (
        <article className="card">
            <img src={TigerImg}/>
            <div className="card--body">
                <p className="card--location">
                    <img src={GeoIndex} /> India
                    <a href="https://goo.gl/maps/wDkYMztGXFNhJyao6">View On Google Maps</a>
                    </p>
                <h3 className="card--title">The White Tiger</h3>
                <p className="card--alt-name">Ghost Tiger, Royal White Tiger</p>
                <p className="card--description">
                    The white tiger, scientifically known as Panthera tigris,
                    is a majestic and rare subspecies of the Bengal tiger 
                    (Panthera tigris tigris). What sets the white tiger apart
                    from its orange counterparts is its unique genetic 
                    variation, resulting in a striking coat coloration characterized
                    by white fur with black stripes. 
                </p>
            </div>
        </article>
    );
}