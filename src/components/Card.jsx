import { StarFilled } from "../assets/Star_fill";
import '../App.css'
import { Star } from "../assets/Star";

function Card({url, title, price, rating, votes, isPopular, available}) {
  return (
    <div className="card">
        <div className="imgdiv">
        {
          isPopular ? <span className="badge">Popular</span> : <span className="p">.</span>
        }
        <img src={url} alt="" />
        </div>
        <div className="card_1">
            <p className="title">{title}</p>
            <p className="price">{price}</p>
        </div>
        <div className="card_2">
           <div>
           {
              votes > 0 ? <StarFilled /> : <Star />
            }
            <p className="reputation"> {rating} <span>{`(${votes} votes)`}</span></p>
            
           </div>
           {
              !available && <p className="sold">Sold Out</p> 
            }
            
        </div>
    </div>
  )
}

export default Card;
