import { useEffect, useState } from 'react';
import './App.css'
import { Header } from './components/Header';
import Cards from './components/Cards';


function App() {

  const [coffes, setCoffes] = useState([]);
  const [filtered, setFiltered] = useState("all");
  
  useEffect(() => {
    const fetchData = async() => {
      const res = await fetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json");
      const data = await res.json();

      setCoffes(data); 
    }
    fetchData()
    
  }, [])

  const filter = coffes.filter(coffe => {
    if(filtered === "all"){
      return coffe
    }
    else if(filtered === "available") {
      return coffe.available === true
    }
  })

  return (
    <div>
      <main>
      <Header setFiltered={setFiltered}/>
      <Cards coffes={filter}/>
    </main>
    <footer>.</footer>
    </div>
  )
}

export default App
