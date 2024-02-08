import "../App.css";

export function Header({setFiltered}) {


  const handleChange = ({target}) => {
    setFiltered(target.value)
  }


  return (
    <header>
      <h1>Our Collection</h1>
      <p>
        Introducing our Coffee Collection, a selection of unique coffees from
        different roast types and origins, expertly roasted in small batches and
        shipped fresh weekly.
      </p>

      <div className="radio-buttons">
        <input type="radio" name="option" id="all" value="all" defaultChecked  onChange={handleChange}/>
        <label className="all_lbl" htmlFor="all">All products</label>
        <input type="radio" name="option" id="available" value="available"  onChange={handleChange}/>
        <label  className="available_lbl"htmlFor="available">Available now</label>
      </div>
    </header>
  );
}
