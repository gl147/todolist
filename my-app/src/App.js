import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import "./App.css";
import "./data/mock";

function App(mock) {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Card />
      </div>
    </div>
  );
}

export default App;
