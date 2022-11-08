import './App.css';
import Hero from './Hero.js';
import Navbar from './Navbar.js';
import Card from "./Card.js"
import MyData from "./Data.js"

function App() {
  const data = (MyData.map (item => {
    return <Card item={item}/>
  }))
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="my--cards">
      {data}
      </section>
    </div>
  );
}

export default App;
