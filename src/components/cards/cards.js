import "./style-modules.css"
import { Link } from "react-router-dom";
import { useState } from "react";
export function Card(props) {
    const [hover, setHover] = useState("imgNotHover")
    function onMouseOver(){
        setHover("imgOnHover")
    }
    function onMouseOut(){
        setHover("imgNotHover")
    }
    return ( 
        <>
            <article className="cardBox">
            <Link to={`/${props.CardName}`} style={{textDecoration: "none", color: "#3c917d99", fontWeight: "800", fontSize: "30px"}}>
                <div className="imgCard">
                   <img src={props.CardImg} alt={props.CardName} className={hover} onMouseOver={onMouseOver} onMouseOut={onMouseOut}/> 
                </div>
                <h5 className="cardName">{props.CardName}</h5>
            </Link>
            </article>
        </>
     );
}