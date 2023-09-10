import "../App.css";
import { default as TigerImg } from "../assets/white-tiger.jpg";

export default function Card()
{
    return (
        <article className="card">
            <img src={TigerImg}/>
            <div className="card--body">
                <p className="card--location">India <a>View On Google Maps</a></p>
                <h3>The White Tiger</h3>
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