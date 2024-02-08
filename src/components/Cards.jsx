import Card from "./Card";
import "../App.css"

function Cards({ coffes }) {
  return (
        <div className="cards">
      {coffes.map((coffe) => (
        
            <Card
              key={coffe.id}
              url={coffe.image}
              title={coffe.name}
              price={coffe.price}
              rating={coffe.rating}
              votes={coffe.votes}
              isPopular={coffe.popular}
              available={coffe.available}
            />
          
      ))}
    </div>
  );
}

export default Cards;
