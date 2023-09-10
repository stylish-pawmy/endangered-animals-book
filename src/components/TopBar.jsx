import "../App.css";
import { default as PawImg } from "../assets/paw.svg";

export default function TopBar()
{
    return (
        <header>
            <div className="header--content">
                <img src={PawImg}/>
                <h1>Endangered Animals Book</h1>
            </div>
        </header>
    )
}