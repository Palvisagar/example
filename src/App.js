import './App.css';

let name="palvi sagar";
function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <div className="container">
      <h1>Hello {name}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Quam natus magni consequatur expedita odit molestias. Ea cum, 
        dolores commodi voluptatum aperiam nemo! Laborum, necessitatibus iste.
         Magnam libero vero asperiores eligendi!
      </p>
    </div>

    </>
  );
}

export default App;
